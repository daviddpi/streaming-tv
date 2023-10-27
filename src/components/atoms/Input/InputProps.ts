import { ChakraProps, ThemingProps } from "@chakra-ui/react";
import type { IconName, IconSize } from "@/components/atoms/Icon/IconProps";

export interface InputProps extends ChakraProps, ThemingProps {
  placeholder?: string;
  leftIconElement?: IconName;
  leftIconColor?: string;
  rightIconElement?: IconName;
  rightIconColor?: string;
  leftIconElementSize?: IconSize;
  rightIconElementSize?: IconSize;
  animate?: boolean;
}
