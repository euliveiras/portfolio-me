import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fontSizes: {
    "large": "2rem",
    "xxx-large": "4rem",
    "xx-large": "3rem"
  },
  fonts: {
    heading: "Lato, sans-serif",
    body: "Roboto, sans-serif"
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth"
      },
      body: {
        bg: "blue.900",
        color: "white",
      },
      strong: {
        fontWeight: "900"
      },
      li: {
        listStyle: "none"
      }
    }
  }
});