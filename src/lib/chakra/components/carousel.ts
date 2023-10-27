import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const Carousel = defineStyleConfig({
  baseStyle: defineStyle({
    overflow: "hidden",
    h: "max-content",
    ".embla-container": {
      display: "flex",
      gap: "2.4rem",
      height: "inherit",
    },
  }),
  variants: {
    primary: {
      overflow: "hidden",
      h: "max-content",
      pos: "relative",
      ".embla-container": {
        display: "flex",
        gap: "2.4rem",
        height: "inherit",
        "*": {
          flex: " 0 0 auto",
          minWidth: 0,
          userSelect: "none",
        },
      },
    },
  },

  defaultProps: {
    variant: "primary",
  },
});
