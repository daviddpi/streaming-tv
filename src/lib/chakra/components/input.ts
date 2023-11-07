import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { fonts } from "@/lib/chakra/theme/fonts";
import { text } from "@/lib/chakra/theme/text";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

export const Input = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    group: {
      justifyContent: "end",
    },

    field: {
      fontFamily: fonts.body,
      color: "white",
      borderRadius: "0.8rem",
      outline: "0",
      border: "1px solid"
    },
    element: {
      top: "auto",
      bottom: "50%",
      left: "1%",
      transform: "translateY(50%)",
    },
  }),

  sizes: {
    base: definePartsStyle({
      field: defineStyle({
        w: "100%",
        h: "100%",
        p: "0.7rem",
        pl: "4rem",
        fontSize: text.body1.fontSize,
      }),
    }),
  },

  variants: {
    custom: definePartsStyle({
      field: defineStyle({
        borderColor: "white",
        bg: "transparent",

        _placeholder: {
          color: "secondary.default",
        },

        _hover: {
          borderColor: "secondary.default",
        },
        _focusVisible: {
          borderColor: "primary.default",
        },
      }),
    }),
  },

  defaultProps: {
    size: "base",
    variant: "custom",
  },
});
