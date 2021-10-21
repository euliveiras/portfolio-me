import { Box, BoxProps } from "@chakra-ui/react";

import { PresentationSection } from "../components/presentationSection";
import { SectionPage } from "../components/sectionPage";
import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);

export default function Home() {
  return (
    <MotionBox
      as="main"
      w="100%"
      d="grid"
      placeItems="center"
      position="absolute"
      right="4%"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transform: "translateX(4%)"
      }}
      transition={{
        duration: "0.9"
      }}
    >
      <PresentationSection />
      <SectionPage />
    </MotionBox>
  );
}
