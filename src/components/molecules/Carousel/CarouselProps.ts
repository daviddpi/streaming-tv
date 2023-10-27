import { ChakraProps, ThemingProps } from "@chakra-ui/react";
import { EmblaOptionsType } from "embla-carousel-react";
import { ReactNode } from "react";

export interface CarouselProps extends ChakraProps, ThemingProps {
  children?: ReactNode;
  options?: EmblaOptionsType;
}
