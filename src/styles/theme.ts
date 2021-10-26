import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
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
        fontWeight: "medium"
      },
      strong: {
        fontWeight: "black"
      },
      li: {
        listStyle: "none"
      },
      a: {
        textDecoration: "underline",
      }
    }
  }
});