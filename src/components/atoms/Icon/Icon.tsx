import { Icons } from "@/components/atoms/Icons";
import { IconProps } from "@/components/atoms/Icon/IconProps";
import { chakra, forwardRef, useStyleConfig } from "@chakra-ui/react";

export const Icon = forwardRef<IconProps, "svg">((props, ref) => {
  const { name, size, ...rest } = props;

  const style = useStyleConfig("Icon", { size });
  const shared = { __css: style, ref, ...rest };

  const _viewBox = Icons[name as keyof typeof Icons].viewBox;
  const _path = Icons[name as keyof typeof Icons].path as React.ReactNode;

  return (
    <chakra.svg viewBox={_viewBox} {...shared}>
      {_path}
    </chakra.svg>
  );
});

Icon.displayName = "Icon";

export default Icon;
