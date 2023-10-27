import { fonts, colors, text } from "./theme";
import { extendTheme } from "@chakra-ui/react";

<<<<<<< HEAD
import { Text, Icon, Button, Card } from "./components";
=======
import { Text, Icon, Button, Input } from "./components";
>>>>>>> 32abb20faccd0296f95d4e47d8255a81f263e5ca

export const theme = extendTheme({
  fonts,
  colors,
  text,

  components: {
    Text,
    Icon,
    Button,
<<<<<<< HEAD
    Card,
=======
    Input,
>>>>>>> 32abb20faccd0296f95d4e47d8255a81f263e5ca
  },

  styles: {
    global: {
      html: {
        fontSize: "62.5%",
      },
    },
  },
});
