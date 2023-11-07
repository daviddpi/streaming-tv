import { fonts, colors, text } from "./theme";
import { extendTheme } from "@chakra-ui/react";

import { Text, Icon, Button, Carousel, Input, Card, Container } from "./components";

export const theme = extendTheme({
  fonts,
  colors,
  text,

  components: {
    Text,
    Icon,
    Button,
    Carousel,
    Card,
    Input,
    Container
  },

  styles: {
    global: {
      html: {
        fontSize: "62.5%",
      },
    },
  },
});
