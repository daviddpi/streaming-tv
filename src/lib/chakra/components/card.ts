import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { relative } from "path";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

export const Card = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      background: "black",
      borderRadius: "1.2rem",
    },
  }),
  sizes: {
    base: definePartsStyle({
      container: defineStyle({
        w: "26.2rem",
        h: "39.3rem",
        p: "2.7rem",
      }),
    }),
  },

  variants: {
    vertical: definePartsStyle({
      container: defineStyle({
        transition: "all 0.3s ease",
        bg: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
        pos: "relative",
        ".overlay": {
          w: "100%",
          h: "100%",
          bg: "transparent",
          transition: "all 0.3s ease",
          pos: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        },
        ".buttons": {
          pos: "relative",
          zIndex: 1,
          transition: "all 0.3s ease",
          transform: "translateY(300%)",
        },
        h2: {
          transform: "translateY(-300%)",
          transition: "all 0.3s ease",
        },
        ".duration": {
          pos: "relative",
          zIndex: 1,
          transform: "translateY(-500%)",
          transition: "all 0.45s ease",
        },
        _hover: {
          ".overlay": {
            bg: "background",
            opacity: "0.4",
          },
          h2: {
            transform: "translateY(0%)",
          },
          ".duration": {
            transform: "translateY(0%)",
          },
          ".buttons": {
            transform: "translateY(0%)",
          },
        },
      }),
    }),
    horizontal: definePartsStyle({
      container: defineStyle({
        bg: "black",
        w: "39.3rem",
        h: "26.2rem",
      }),
    }),
  },

  defaultProps: {
    size: "base",
    variant: "vertical",
  },
});
