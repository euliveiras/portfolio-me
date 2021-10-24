import { Box, Flex, Text, Icon, VStack } from "@chakra-ui/react";

export const SectionPage: React.FC = () => {
  return (
    <Box
      as="section"
      h={["auto", "100vh"]}
      w="100%"
      id="about-me"
      d="grid"
      placeItems="center"
    >
      <Flex
        borderRadius="4"
        h={["auto", "90%"]}
        w="90%"
        backgroundColor="white"
        align="center"
        justify="center"
        flexDir="column"
        color="blue.900"
      >
        <Text m="0 15% 5%" fontFamily="body" fontSize={["sm", "xl"]}>
          Há anos eu estudo desenvolvimento web e tem sido uma jornada e tanto.
          Meu primeiro arquivo HTML, me sentindo aquelas pessoas em filmes
          sci-fi que ficam na frente do computador com várias letras e numeros
          aparecendo; às horas incontáveis que passava tentando centralizar um
          conteúdo com flexbox(no caso ainda passo, CSS é lindo e assustador); o
          tempo que demorei a entender como utilizar a função reduce do
          javascript; os apps que buguei utilizando useEffect com dependência
          errada; os questionamentos do porquê da api em express/node não estar
          retornando nada (e questionando minha existência; o prazer INENARRÁVEL
          em tipar absolutamente TUDO com typescript. Eu tenho muito orgulho da
          minha grande-porém-muito-curta jornada. Foi difícil, é difícil, será
          difícil, mas eu amo demais fazer isso.
        </Text>
      </Flex>
    </Box>
  );
};
