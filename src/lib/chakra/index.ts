import { fonts, colors, text } from "./theme";
import { extendTheme } from "@chakra-ui/react";

import { Text } from "./components/text";

export const theme = extendTheme({
  fonts,
  colors,
  text,

  components: {
    Text,
  },

  styles: {
    global: {
      html: {
        fontSize: "62.5%",
      },
    },
  },
});
