import { Box, BoxProps } from "@chakra-ui/react";

import { RichText } from "prismic-dom"
import { GetStaticProps } from "next";
import { prismiClient } from "../services/prismic";
import { PresentationSection } from "../components/homeSection";
import { AboutSection } from "../components/aboutSection";
import { motion } from "framer-motion";
import { FooterSection } from "../components/footerSection";

const MotionBox = motion<BoxProps>(Box);

type HomeProps = {
  document: {
    text: string;
    imageUrl: string;
  };
}

type PrismicDocument = {
  data: {
    "about-text": {
      text: string;
    };
    "about-image": {
      url: string;
    }
  }
}

export default function Home({ document }: HomeProps) {

  return (
    <MotionBox
      as="main"
      w="100%"
      d="grid"
      placeItems="center"
      position="absolute"
      right="4%"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transform: "translateX(4%)",
      }}
      transition={{
        duration: "0.9",
      }}
    >
      <PresentationSection />
      <AboutSection text={document.text} imageUrl={document.imageUrl} />
      <FooterSection />
    </MotionBox>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const document: PrismicDocument = await prismiClient.getSingle("about-me", {})

  return {
    props: {
      document: {
        text: RichText.asText(document?.data["about-text"]),
        imageUrl: document?.data["about-image"].url,
      }
    },
    revalidate: 60 * 60
  }
}

