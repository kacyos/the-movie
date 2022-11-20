import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image"
interface IDeskTopNavBarProps {
  list: [
    {
      label: string;
      children: [];
    }
  ];
}

import Logo from '../../public/logo.png';

export const DeskTopNavBar = ({ list }: IDeskTopNavBarProps) => {
  // const { isOpen, onToggle, getButtonProps } = useDisclosure();
  return (
    <Box w="full">
      <Flex justify="space-between" align="center" h="full" alignItems="center">  

      <Box display="flex" flexDir="column" justifyContent="center" alignItems="center">
        <Image src={Logo} alt="Logo" width={50} height={50}/>    
        <span>The movie</span>
      </Box>
      
        <Box display="flex" w="md">
          <Input />
          <Button>ok</Button>
        </Box>

        <HStack as="nav" mr={5} display="flex" gap="8">
          {list.map(({ label, children }) => (
            <Popover
              key={Math.random()}
              trigger={"hover"}
              placement={"bottom-start"}
            >
              <PopoverTrigger>
                <Link
                  fontSize="md"
                  _hover={{ textDecoration: "none", color: "pink.300" }}
                >
                  {label}
                </Link>
              </PopoverTrigger>

              {children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  //bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  w="fit-content"
                  h="md"
                  overflow="auto"
                >
                  <Stack w="fit-content" p={4}>
                    {children.map((child) => (
                      <Link color="blackAlpha.800">{child}</Link>
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};
