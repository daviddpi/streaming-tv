import { defineStyleConfig } from "@chakra-ui/react";

export const Icon = defineStyleConfig({
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sizes: {
    sm: {
      w: "1.6rem",
      h: "1.6rem",
    },
    md: {
      w: "2.8rem",
      h: "2.8rem",
    },
    lg: {
      w: "3.5rem",
      h: "3.5rem",
    },
  },
  defaultProps: { size: "md" },
});
