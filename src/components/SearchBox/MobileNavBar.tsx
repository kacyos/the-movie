import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Collapse,
  Link,
  Stack,
  useDisclosure,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { match } from "assert";

interface IMobileNavBarProps {
  list: [
    {
      label: string;
      children: Array<string>;
    }
  ];
}

export const MobileNavBar = ({ list }: IMobileNavBarProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      //bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {list.map(({ label, children }) => (
        <Stack key={Math.random()} spacing={4} onClick={children && onToggle}>
          <Flex
            py={2}
            as={Link}
            href={"/"}
            justify={"space-between"}
            align={"center"}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text fontWeight={600} color={"gray.600"}>
              {label}
            </Text>
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
              />
            )}
          </Flex>
          <Collapse
            in={isOpen}
            animateOpacity
            style={{ marginTop: "0!important" }}
          >
            <Stack
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={"solid"}
              // borderColor={useColorModeValue("gray.200", "gray.700")}
              align={"start"}
            >
              {children &&
                children.map((child) => (
                  <Link key={Math.random()} py={2} href="/">
                    {child}
                  </Link>
                ))}
            </Stack>
          </Collapse>
        </Stack>
      ))}
    </Stack>
  );
};

/*


  <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
           <Stack
             mt={2}
             pl={4}
             borderLeft={1}
             borderStyle={"solid"}
            // borderColor={useColorModeValue("gray.200", "gray.700")}
             align={"start"}
           >
             {children &&
               children.map((child) => (
                 <Link key={child.label} py={2} href={child.href}>
                   {child.label}
                 </Link>
               ))}
           </Stack>
         </Collapse>
*/
