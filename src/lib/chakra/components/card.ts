import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

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
        p: "0.6rem",
      }),
    }),
    sm: definePartsStyle({
      container: defineStyle({
        p: "2.7rem",
      }),
    }),
  },

  variants: {
    animate: definePartsStyle({
      container: defineStyle({
        w: { base: "15rem", md: "20.2rem" },
        h: { base: "20rem", md: "33.3rem" },
        p: { base: "0.6rem", md: "2.4rem" },
        transition: "all 0.3s ease",
        bg: "black",
        backgroundPosition: "center",
        backgroundSize: { base: "contain", md: "cover" },
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
        ".title": {
          transform: "translateY(-300%)",
          transition: "all 0.3s ease",
        },
        ".duration": {
          pos: "relative",
          zIndex: 1,
          transform: "translateY(-800%)",
          transition: "all 0.45s ease",
        },
        _hover: {
          transform: "scale(1.02)",
          ".overlay": {
            bg: "background",
            opacity: "0.4",
          },
          ".title": {
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
    vertical: definePartsStyle({
      container: defineStyle({
        w: { base: "15rem", md: "20.2rem" },
        h: { base: "20rem", md: "33.3rem" },
        p: { base: "0.6rem", md: "2.4rem" },
      }),
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
      ".title": {
        transform: "translateY(-300%)",
        transition: "all 0.3s ease",
      },
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
    variant: "animate",
  },
});
