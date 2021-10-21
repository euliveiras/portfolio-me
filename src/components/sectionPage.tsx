import { Box, Flex, Text, Image } from "@chakra-ui/react";

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
            >
                <Text color="blue.900" w={["90%", "40%"]} m="0 auto" fontFamily="body" fontSize={[, "sm", "xl"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare suspendisse sed. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Cursus vitae congue mauris rhoncus aenean vel elit. Augue lacus viverra vitae congue eu. Quisque egestas diam in arcu cursus euismod quis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque convallis a cras semper auctor neque vitae tempus. Quis varius quam quisque id diam vel. Et ultrices neque ornare aenean euismod elementum nisi quis. Elementum sagittis vitae et leo duis ut. Nunc aliquet bibendum enim facilisis gravida neque.
                </Text>
                <Image borderRadius="4" src="/me.png" w="40%" h="80%" m="0 auto" maxWidth="100%"
                    visibility={["hidden", "visible"]}
                    backgroundColor="blue.900" alt="foto de matheus" />
            </Flex>
        </Box>
    );
}