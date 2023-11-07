import { ChakraProps, ThemingProps } from "@chakra-ui/react";

export type LinksHeader = {
    text: string;
    route: string;
};

export interface HeaderProps extends ChakraProps, ThemingProps {
    links?: LinksHeader[];
}