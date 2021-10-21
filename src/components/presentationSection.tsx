import { Box, Text, Link, Icon, Image, Flex } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const PresentationSection: React.FC = () => {
    return (
        <Box
            as="section"
            w="100%"
            h="100vh"
            d="grid"
            placeItems="center"
        >
            <Flex d="flex" w="80%" mt="12">
                <Text as="h1" fontFamily="heading" fontWeight="900" fontSize={["large", "xxx-large"]} h="100%" lineHeight="tall" w="50%">
                    meu nome é<Text as="strong" color="pink.500"> Matheus Oliveira </Text>
                    <Text>
                        & sou desenvolvedor full-stack
                        <Text as="span" color="pink.500">
                            .
                        </Text>
                    </Text>
                </Text>
                <Box w="50%" d="flex" justifyContent="flex-end">
                    <Image src="/me.png" borderRadius="0.9rem" maxWidth="100%" boxSize="460px" height="100%" alt="foto de Matheus Oliveira" />
                </Box>
            </Flex>
            <Link
                href="#about-me"
                fontFamily="heading"
                fontWeight="700"
                role="group"
                isolation="isolate"
                cursor="pointer"
                w="md"
                p="4"
                marginBlockEnd="12"
                borderRadius="0.9rem"
                bgColor="transparent"
                border="1px solid white"
                position="relative"
                transition="color ease 0.3s"
                overflow="hidden"
                display="flex"
                lineHeight="4"
                justifyContent="center"
                alignItems="center"
                _after={{
                    content: `""`,
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "pink.600",
                    transform: "scale(1, 0)",
                    transition: "transform ease 0.3s",
                    transformOrigin: "top",
                    zIndex: "-1",
                }}
                _hover={{
                    _after: {
                        backgroundColor: "pink.600",
                        transform: "scale(1, 1)",
                    },
                }}
            >
                <Text fontWeight="700" fontSize="xx-large">me conheça</Text>
                <Icon
                    ml="4"
                    boxSize="8"
                    _groupHover={{
                        transform: "rotate(90deg)",
                    }}
                    as={FiArrowRight}
                    transition="transform ease 0.3s"
                />
            </Link>
        </Box>
    )
}

export { PresentationSection };