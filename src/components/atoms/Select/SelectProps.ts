import { ChakraProps, ThemingProps } from "@chakra-ui/react";

export interface SelectProps extends ChakraProps, ThemingProps {
    label: string;
    options: string[];
}
