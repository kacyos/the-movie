import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Input } from "./Input";

export const SearchBox = () => {
  return (
    <Flex justify="center" my={5}>
      <Input />
      <Button>Pesquisar</Button>
    </Flex>
  );
};
