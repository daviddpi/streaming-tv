import { ChakraProps, ThemingProps } from "@chakra-ui/react";

export interface CardProps extends ChakraProps, ThemingProps {
  title?: string;
  duration?: string;
  cover?: string;
  href?: string;
  external?: boolean;
}
