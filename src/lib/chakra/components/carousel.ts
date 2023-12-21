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
      _after: {
        content: `""`,
        pos: "absolute",
        right: 0,
        top: 0,
        width: "100%",
        h: "100%",
        background: 'linear-gradient(90deg, rgba(15,15,15,0) 93%, rgba(15,15,15,1) 100%)',
        pointerEvents: 'none',
        zIndex: 1
      },
      _before: {
        content: `""`,
        pos: "absolute",
        left: "-2px",
        top: 0,
        width: "100%",
        h: "100%",
        background: 'linear-gradient(90deg, rgba(15,15,15,1) 0%, rgba(15,15,15,0) 7%)',
        pointerEvents: 'none',
        zIndex: 1
      },
      "&.first": {
        _before: {
          display: 'none'
        }
      },
      "&.last": {
        _after: {
          display: 'none'
        }
      },
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
