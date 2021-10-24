import { Text, HStack, Box } from "@chakra-ui/react";

export const FooterSection = () => {
  return (
    <Box p="5%" d="grid" placeItems="center">
      <Text as="h2" fontSize={["x-large", "xx-large"]}>
        links
      </Text>
      <HStack spacing={[1, 4]} as="ul">
        <Text as="li">
          <Text as="a" href="https://codepen.io/euliveiras">
            codepen
          </Text>
        </Text>
        <Text as="li">
          <Text as="a" href="https://github.com/euliveiras">
            github
          </Text>
        </Text>
        <Text as="li">
          <Text as="a" href="https://www.linkedin.com/in/euliveiras/">
            linkedin
          </Text>
        </Text>
      </HStack>
    </Box>
  );
};
