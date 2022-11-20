import Head from "next/head";
import { GetStaticProps } from "next";
import api from "./api";
import {
  Box,
  Flex,
  Heading,
  Img,
  useDisclosure,
  Text,
  Show,
} from "@chakra-ui/react";
import { SlideImage } from "./../components/Slider";
import { SearchBox } from "../components/SearchBox";
import WithSubnavigation from "../components/SearchBox/box";

import { Navigation, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IHomeProps {
  trendToday: {
    results: IMovie[];
  };
  weekTrend: {
    results: IMovie[];
  };
  popular: {
    results: IMovie[];
  };
}

export default function Home({ trendToday, weekTrend, popular }: IHomeProps) {
  const defineColorChart = (vote: number) => {
    const voteAverage = Number(vote.toFixed(2));

    if (voteAverage <= 3.5) {
      return "red";
    }
    if (voteAverage <= 6) {
      return "yellow";
    }

    return "green";
  };
  return (
    <>
      <Head>
        <title>The Movies</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Box px={2} w={{ base: "90%" }} mx="auto">
        {/* <SearchBox />*/}
        <Flex
          justifyContent="center"
          alignItems="center"
          mb={{ md: 10, xs: 5 }}
        >
          <Box w="full" bg="gray.700" h={{ xs: "auto" }} pt={2}>
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              //effect={"fade"}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
            >
              {popular.results.map((popularMovie) => (
                <>
                  <SwiperSlide key={popularMovie.id}>
                    <Grid
                      gap={{ md: 2, xs: 0 }}
                      flexDir={{ md: "row", xs: "column" }}
                    >
                      <Flex
                        justifyContent={{ md: "normal", xs: "center" }}
                        width={"full"}
                        height={{ xs: "sm", md: "auto" }}
                      >
                        <Img
                          src={`https://image.tmdb.org/t/p/w500/${popularMovie.poster_path}`}
                          alt={popularMovie.title}
                          pointerEvents="none"
                          objectFit="cover"
                          height={{ base: "100%" }}
                          width="auto"
                        />
                      </Flex>

                      <Flex
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDir="column"
                        gap={2}
                      >
                        {/* Container title e avaliação */}
                        <Flex
                          mt={{ md: 0, xs: 4 }}
                          gap={{ md: 10, xs: 4 }}
                          justifyContent="center"
                          alignItems="center"
                          flexDir={{ md: "row", xs: "column" }}
                        >
                          <Heading as="h1" size={"sm"} color="gray.200">
                            {popularMovie.title}
                          </Heading>

                          <Box h="20" w="20">
                            <CircularProgressbar
                              strokeWidth={10}
                              maxValue={10}
                              value={popularMovie.vote_average}
                              text={`${popularMovie.vote_average.toFixed(1)}%`}
                              backgroundPadding={1}
                              styles={buildStyles({
                                textColor: "#EEEEF2",
                                pathColor: defineColorChart(
                                  popularMovie.vote_average
                                ),
                                trailColor: "#ddd",
                              })}
                            />
                          </Box>
                        </Flex>

                        {/* Texto de descrição */}
                        <Box p={{ md: 10, xs: 1 }}>
                          <Show above="md">
                            <Text fontSize={18}>{popularMovie.overview}</Text>
                          </Show>
                        </Box>
                      </Flex>

                    </Gri>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </Box>
        </Flex>

        {/* Daqui está ok */}
        <Flex direction="column" gap={10} mb={10}>
          <Box as="section" bg={"gray.700"} p={4} borderRadius={4}>
            <Heading as="h1" size="sm" noOfLines={1} color="gray.300" pb={2}>
              Tendências do dia
            </Heading>
            <SlideImage results={trendToday.results} />
          </Box>

          <Box as="section" bg={"gray.700"} p={4} borderRadius={4}>
            <Heading as="h1" size="sm" noOfLines={1} color="gray.300" pb={2}>
              Tendências da semana
            </Heading>
            <SlideImage results={weekTrend.results} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: trendToday } = await api.get("trending/movie/day");
  const { data: weekTrend } = await api.get("trending/movie/week");
  const { data: popular } = await api.get("movie/top_rated");
  const { data: genre } = await api.get("genre/movie/list");

  console.log(genre);
  //const { data: teste } = await api.get("discover/movie");

  /*
  Obtém a lista de generos
  const { data: teste } = await api.get("genre/movie/list");

  */

  return {
    props: {
      trendToday,
      weekTrend,
      popular,
    },

    revalidate: 5, //60 * 60 * 5, // 5 hours,
  };
};
