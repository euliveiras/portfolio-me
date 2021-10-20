import { Box, Text, Button, Icon, Image } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <Box
      as="main"
      w="100vw"
      h="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundColor="blue.800"
    >
      <Box textAlign="left" ml="10em" w="100%" d="flex">
        <Text fontSize={["large", "xxx-large"]} color="white" w="50%">
          Meu nome é<Text as="strong"> Matheus Oliveira </Text>
          <Text>
            & sou desenvolvedor full-stack
            <Text as="span" color="pink.800">
              .
            </Text>
          </Text>
        </Text>
        <Box w="50%" display="grid" placeItems="center">
          <Image src="/me.png" borderRadius="full" boxSize="320px"></Image>
        </Box>
      </Box>
      <Button
        role="group"
        mt="8"
        isolation="isolate"
        cursor="pointer"
        color="white"
        w="md"
        p="9"
        bgColor="transparent"
        border="1px solid white"
        position="relative"
        transition="color ease 0.3s"
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
        _after={{
          content: `""`,
          position: "absolute",
          inset: 0,
          backgroundColor: "pink.800",
          transform: "scale(1, 0)",
          transition: "transform ease 0.3s",
          transformOrigin: "top",
          zIndex: "-1",
        }}
        _hover={{
          _after: {
            backgroundColor: "pink.800",
            transform: "scale(1, 1)",
          },
        }}
      >
        <Text fontSize="xx-large">Conheça meu trabalho</Text>
        <Icon
          ml="4"
          boxSize="8"
          _groupHover={{
            transform: "rotate(90deg)",
          }}
          as={FiArrowRight}
          transition="transform ease 0.3s"
        />
      </Button>
    </Box>
  );
}
