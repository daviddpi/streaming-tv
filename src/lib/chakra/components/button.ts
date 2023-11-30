import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseLink = {
  p: 0,
  border: "none",
  _hover: {
    color: "tertiary",
  },
};

const baseButton = {
  borderRadius: "0.8rem",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.9rem",
};

const buttonVariants = {
  primary: {
    color: "inherit",
    bg: "primary.default",
    _hover: {
      bg: "primary.hover",
    },
    _active: {
      bg: "primary.active",
    },
  },
  secondary: {
    color: "inherit",
    bg: "secondary.default",
    _hover: {
      bg: "secondary.hover",
      color: "white",
    },
    _active: {
      bg: "secondary.active",
    },
  },
  tertiary: {
    border: "1px solid",
    borderColor: "primary.default",
    color: "primary.default",
    bg: "rgba(0,0,0,0.5)",
    backdropFilter: {
      blur: "2rem",
    },
    _hover: {
      color: "white",
      bg: "primary.default",
    },
    _active: {
      bg: "primary.active",
    },
  },
  icon: {
    p: 0,
    color: "black",
    _hover: {
      color: "tertiary",
    },
  },
  linkPrimary: {
    ...baseLink,
    color: "black",
  },
  linkSecondary: {
    ...baseLink,
    color: "white",
    _hover: {
      color: "secondary.default",
    },
  },
};

export const Button = defineStyleConfig({
  baseStyle: defineStyle({
    ...baseButton,
  }),
  sizes: {
    base: {
      w: "fit-content",
      h: "auto",
      padding: "1.1rem 2.4rem",
    },
  },
  variants: {
    primary: {
      ...buttonVariants.primary,
    },
    primaryRounded: {
      ...buttonVariants.primary,
      borderRadius: 'full',
      p: "1.3rem",
    },
    secondary: {
      ...buttonVariants.secondary,
    },
    secondaryRounded: {
      ...buttonVariants.secondary,
      borderRadius: 'full',
      p: "1.3rem",
    },
    tertiary: {
      ...buttonVariants.tertiary,
    },
    tertiaryRounded: {
      ...buttonVariants.tertiary,
      borderRadius: 'full',
      p: "1.3rem",
    },
    icon: {
      ...buttonVariants.icon,
    },
    linkPrimary: {
      ...buttonVariants.linkPrimary,
      _hover: {
        ...buttonVariants.linkPrimary._hover,
      },
    },
    linkSecondary: {
      ...buttonVariants.linkSecondary,
    },
  },
  defaultProps: {
    variant: "tertiary",
    size: "base",
  },
});