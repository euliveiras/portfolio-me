import { Text, HStack, Box } from "@chakra-ui/react";

export const FooterSection = () => {
  return (
    <Box d="grid" placeItems="center" p="4%">
      <Text as="h2" fontFamily="heading" fontSize="5xl">
        links
      </Text>
      <HStack spacing={8} as="ul">
        <Text as="li">
          <Text
            transition="color 0.2s"
            _hover={{
              color: "pink.500"
            }
            }
            as="a"
            href="https://codepen.io/euliveiras"
          >
            codepen
          </Text>
        </Text>
        <Text as="li"
          transition="color 0.2s"
          _hover={{
            color: "pink.500"
          }
          }>
          <Text as="a" href="https://github.com/euliveiras">
            github
          </Text>
        </Text>
        <Text as="li"
          transition="color 0.2s"
          _hover={{
            color: "pink.500"
          }
          }>
          <Text as="a" href="https://www.linkedin.com/in/euliveiras/">
            linkedin
          </Text>
        </Text>
      </HStack>
    </Box>
  );
};
