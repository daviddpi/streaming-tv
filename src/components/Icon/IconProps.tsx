import { ChakraProps, ThemingProps } from "@chakra-ui/react";

type name =
  | "play"
  | "info"
  | "ring"
  | "star"
  | "emptyStar"
  | "halfStar"
  | "search"
  | "arrow";

export interface IconProps extends ChakraProps, ThemingProps  {
  name: name;
}
