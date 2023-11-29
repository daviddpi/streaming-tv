import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { text } from "@/lib/chakra/theme/text";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
    list: {
        minW: "14rem",
        p: "1rem",
        borderRadius: "0.8rem",
        border: 'none',
        bg: 'secondary.active',
        color: "white",
        fontSize: text.body1.fontSize,
        button: {
            _hover: {
                borderRadius: "0.6rem",
                bg: "tertiary",
                color: "secondary.default"
            },
            _focus: {
                borderRadius: "0.6rem",
                bg: "tertiary",
                color: "secondary.default"
            },
        }
    },
})

export const Select = defineMultiStyleConfig({ baseStyle })