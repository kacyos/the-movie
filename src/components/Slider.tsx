import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Box, Flex, Img, Text, VisuallyHidden } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

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
  results: IMovie[];
}

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

export function SlideImage({ results }: IHomeProps) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={5}
      slidesPerView="auto"
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        320: {
          slidesPerView: 3,
        },
        425: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 8,
        },
      }}
    >
      {results.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Box>
            <Img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
              onClick={(e) => console.log(e)}
              pointerEvents="none"
              height={["36", "48", "52"]}
              width="full"
              objectFit="cover"
            />
          </Box>

          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            gap={2}
            cursor="pointer"
            position="absolute"
            top="0"
            left="0"
            height="full"
            width="full"
            opacity="0"
            _hover={{
              backgroundColor: "#030303b6",
              opacity: 1,
              transition: "all ease .5s",
            }}
          >
            <Flex
              opacity="1"
              justifyContent="center"
              alignItems="center"
              flexDir="column"
              gap={2}
              p={1}
            >
              <Text
                textAlign="center"
                fontSize={16}
                fontWeight="bold"
                color="pink.500"
              >
                {movie.title}
              </Text>

              <Text fontSize={14} color="gray.100" fontWeight="bold">
                Avaliação
              </Text>
              <Box h={20} w={20}>
                <CircularProgressbar
                  maxValue={10}
                  value={movie.vote_average}
                  text={`${movie.vote_average.toFixed(1)}%`}
                  styles={buildStyles({
                    textColor: "#EEEEF2",
                    pathColor: defineColorChart(movie.vote_average),
                    trailColor: "#ddd",
                  })}
                />
              </Box>
            </Flex>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
