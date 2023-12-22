import { Icon } from "@/components/atoms/Icon/Icon";
import { InputProps } from "@/components/atoms/Input/InputProps";
import {
  Box,
  InputGroup,
  InputLeftElement,
  chakra,
  forwardRef,
  omitThemingProps,
  useFormControl,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const InputSearch = forwardRef<InputProps, "input">(function Input(
  props,
  ref
) {
  const {
    animate: open,
    placeholder,
    leftIconElement,
    leftIconColor,
    leftIconElementSize,
    ...rest
  } = props;

  const styles = useMultiStyleConfig("Input", rest);
  const ownProps = omitThemingProps(rest);
  const input = useFormControl<HTMLInputElement>(ownProps);
  const inputRef = useRef(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      const input = (inputRef.current as HTMLInputElement)
        .childNodes[1] as HTMLInputElement;
      input.focus();
    }
  }, [open]);

  return (
    <Box p="1.6rem 0" bg="tertiary">
      <InputGroup ref={open ? inputRef : null}>
        <InputLeftElement>
          <Icon
            cursor="pointer"
            name="search"
            size={leftIconElementSize}
            color={leftIconColor}
          />
        </InputLeftElement>
        <chakra.input
          {...input}
          border="none"
          placeholder={placeholder}
          ref={ref}
          __css={styles.field}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
    </Box>
  );
});

InputSearch.displayName = "InputSearch";
