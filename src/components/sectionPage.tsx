import { Box, Flex, Text, Icon, VStack } from "@chakra-ui/react";
import { MdOutlineMail } from "react-icons/md";
import { FiGithub } from "react-icons/fi"
import { GrLinkedin } from "react-icons/gr"

export const SectionPage: React.FC = () => {
    return (
        <Box as="section"
            h={["auto", "100vh"]}
            w="100%"
            id="about-me"
            // borderTop="1px solid white"
            d="grid"
            placeItems="center"
        >
            <Flex
                borderRadius="4"
                h="90%"
                w="90%"
                backgroundColor="white"
                align="center"
                justify="center"
                flexDir="column"
                color="blue.900"
            >
                <Text m="0 15% 5%" fontFamily="body" fontSize={[, "sm", "xl"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare suspendisse sed. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus vitae congue mauris rhoncus aenean vel elit. Augue lacus viverra vitae congue eu. Quisque egestas diam in arcu cursus euismod quis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque convallis a cras semper auctor neque vitae tempus. Quis varius quam quisque id diam vel. Et ultrices neque ornare aenean euismod elementum nisi quis. Elementum sagittis vitae et leo duis ut. Nunc aliquet bibendum enim facilisis gravida neque.
                </Text>
                <Text as="h2" fontSize="xx-large">
                    Informações de contato
                </Text>
                <VStack spacing={4} as="ul">
                    <Text d="flex" alignItems="center" as="li"><Icon as={MdOutlineMail} boxSize="40px" pr="4" />
                        matheus.skm@hotmail.com
                    </Text>
                    <Text d="flex" alignItems="center" as="li"><Icon as={FiGithub} boxSize="40px" pr="4" />
                        <Text as="a" href="https://github.com/euliveiras">github.com/euliveiras</Text>
                    </Text>
                    <Text d="flex" alignItems="center" as="li"><Icon as={GrLinkedin} boxSize="40px" pr="4" />
                        <Text as="a" href="https://www.linkedin.com/in/euliveiras/">
                            linkedin.com/in/euliveiras/
                        </Text>
                    </Text>
                </VStack>
            </Flex>
        </Box>
    );
}