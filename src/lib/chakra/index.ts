import { fonts, colors } from "./theme";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts,
  colors,
  styles: {
    global: {
      html: {
        fontSize: "62.5%",
      },
    },
  },
});
