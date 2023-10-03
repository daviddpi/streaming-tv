import { fonts } from "./theme";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts,
  styles: {
    global: {
      html: {
        fontSize: "62.5%",
      },
    },
  },
});
