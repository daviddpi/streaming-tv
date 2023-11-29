import { ChakraProps, ThemingProps } from "@chakra-ui/react";
import type { IconName, IconSize } from "../Icon/IconProps";

export interface ButtonProps extends ChakraProps, ThemingProps {
  label?: string;
  icon?: IconName;
  iconSize?: IconSize;
  iconLeft?: boolean;
  iconRight?: boolean;
  tag?: "button" | "link";
  href?: string;
  external?: boolean;
  isActive?: boolean;
}
