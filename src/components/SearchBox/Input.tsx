import {
  Button,
  Flex,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";

export const Input = ({ ...rest }: InputProps) => {
  return (
    <ChakraInput
      type="text"
      aria-label="Pesquisar Filme"
      placeholder="Nome do filme"
      w="lg"
      variant="filled"
      _focus={{
        borderColor: "pink.200",
      }}
      backgroundColor="gray.600"
      borderColor="gray.400"
      {...rest}
    />
  );
};
