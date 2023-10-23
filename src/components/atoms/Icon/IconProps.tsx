import { ChakraProps, ThemingProps } from "@chakra-ui/react";

export type IconSize = "sm" | "md" | "lg";

export type IconName =
  | "play"
  | "info"
  | "ring"
  | "star"
  | "emptyStar"
  | "halfStar"
  | "search"
  | "arrow";

export interface IconProps extends ChakraProps, ThemingProps {
  name: IconName;
  size?: IconSize;
}
