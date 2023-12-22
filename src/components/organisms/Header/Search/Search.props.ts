import type { HTMLChakraProps, ThemingProps } from "@chakra-ui/react";

export interface ISearchProps extends ThemingProps, HTMLChakraProps<"div"> {
    onClose: () => void;
    onOpen: () => void;
    open: boolean;
    close: boolean;
}