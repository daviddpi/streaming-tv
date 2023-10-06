import { chakra, forwardRef, useStyleConfig, Text } from "@chakra-ui/react";
import { ButtonProps } from "./ButtonProps";
import { Icon } from "@/components/atoms/Icon/Icon";
import Link from "next/link";

export const Button = forwardRef<ButtonProps, "button">((props, ref) => {
  const {
    label,
    icon,
    iconSize = "md",
    iconLeft = true,
    iconRight = false,
    tag = "button",
    href,
    external,
    variant,
    ...rest
  } = props;

  const style = useStyleConfig("Button", { variant });

  const shared = { __css: style, ref, ...rest };

  return (
    <chakra.button
      {...shared}
      {...(tag === "link" && {
        as: Link,
        href: href,
        target: external ? "_blank" : "",
      })}
    >
      {iconLeft && icon && !iconRight && <Icon name={icon} size={iconSize} />}
      {label && (
        <Text variant={tag !== "link" ? "button" : "body1"} as="span">
          {label}
        </Text>
      )}
      {iconRight && icon && <Icon name={icon} size={iconSize} />}
    </chakra.button>
  );
});

Button.displayName = "Button";

export default Button;
