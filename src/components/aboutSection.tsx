import { Box, Flex, Text, Icon, VStack, Image } from "@chakra-ui/react";

type aboutSectionProps = {
  text: string;
  imageUrl: string;
}

export const AboutSection: React.FC<aboutSectionProps> = ({ text, imageUrl }) => {

  return (
    <Box
      as="section"
      h={["auto", "auto", "auto", "auto", "100vh"]}
      w="100%"
      id="about-me"
      d="grid"
      placeItems="center"
    >
      <Flex
        borderRadius="4"
        w="90%"
        paddingInline={8}
        paddingBlock={12}
        lineHeight="taller"
        backgroundColor="white"
        align="center"
        justify="center"
        flexDir={["column", "column", null, "column", "row"]}
        color="blue.900"
      >
        <Text m="0 5%" fontFamily="body" fontSize={["lg", "2xl", "xl"]} w={["100%", "100%", null, "100%", "50%"]}>
          {text}
        </Text>

        <Box w={["100%", "100%", null, "100%", "50%"]} d="grid" placeItems="center" mt={[8, 12, null, 12, 12, 0]}>
          <Image src={imageUrl} borderRadius="0.9rem" maxWidth="100%" boxSize={"460px"} height="100%" alt="foto de Matheus Oliveira" />
        </Box>
      </Flex>
    </Box>
  );
};