import { fonts, colors, text, breakpoints } from "./theme";
import { extendTheme } from "@chakra-ui/react";

import { Text, Icon, Button, Carousel, Input, Card, Select, Container } from "./components";

export const theme = extendTheme({
  fonts,
  colors,
  text,
  breakpoints,

  components: {
    Text,
    Icon,
    Button,
    Carousel,
    Card,
    Input,
    Select,
    Container
  },

  styles: {
    global: {
      html: {
        fontSize: "62.5%",
      },
      body: {
        bg: "black"
      }
    },
  },
});
