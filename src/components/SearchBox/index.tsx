import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  useDisclosure,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { DeskTopNavBar } from "./DeskTopNavBar";
import { Input } from "./Input";
import { MobileNavBar } from "./MobileNavBar";

const links = [
  { label: "Populares", children: null },
  { label: "Tendências", children: null },
  {
    label: "Categorias",
    children: [
      "Antura",
      "Animação",
      "Comédia",
      "Crime",
      "Documentário",
      "Drama",
      "Família",
      "Fantasia",
      "História",
      "Terror",
      "Música",
      "Mistério",
      "Romance",
      "Ficção ",
      "Thriller",
      "Guerra",
      "Faroeste",
    ],
  },
];

export const SearchBox = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box w="full" background="gray.700">
      <Flex       
        //bg={useColorModeValue("white", "gray.800")}
        //color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>       

          <Flex display={{ base: "none", md: "flex" }} w="full" ml={4}>            
              <DeskTopNavBar list={links} />
          </Flex>
        </Flex>       
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNavBar list={links} />
      </Collapse>
    </Box>
  );
};
