import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  chakra,
  forwardRef,
  omitThemingProps,
  useFormControl,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { Icon } from "@/components/atoms/Icon/Icon";
import { InputProps } from "./InputProps";
import { useEffect, useRef, useState } from "react";
// import useOutsideClick from "@/hook/useOutsideClick";

export const Input = forwardRef<InputProps, "input">(function Input(
  props,
  ref
) {
  const {
    animate,
    placeholder,
    leftIconElement,
    rightIconElement,
    leftIconColor,
    rightIconColor,
    leftIconElementSize,
    rightIconElementSize,
    ...rest
  } = props;

  const styles = useMultiStyleConfig("Input", rest);
  const ownProps = omitThemingProps(rest);
  const input = useFormControl<HTMLInputElement>(ownProps);

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(animate ? false : true);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClick(e: Event) {
      const target = e.target as HTMLElement;
      if (inputRef.current) {
        if (!(inputRef.current as HTMLElement).contains(target)) {
          setOpen(false);
        } else {
          const input = (inputRef.current as HTMLInputElement)
            .childNodes[1] as HTMLInputElement;
          setOpen(true);
          setTimeout(() => {
            input.click();
            input.focus();
          }, 100);
        }
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [inputRef, open]);

  return (
    <InputGroup
      ref={animate ? inputRef : null}
      {...(animate && { w: open ? "100%" : "0" })}
      transition="width 0.4s ease"
    >
      {leftIconElement && (
        <InputLeftElement
          {...(animate &&
            (open
              ? { left: "1%", transform: "translateX(0)", top: "50%" }
              : { left: "100%", transform: "translateX(-100%)", top: "50%" }))}
          transition="left 0.41s ease"
        >
          <Icon
            cursor="pointer"
            onClick={() => setOpen(true)}
            name={leftIconElement}
            size={leftIconElementSize}
            color={leftIconColor}
          />
        </InputLeftElement>
      )}
      <chakra.input
        pointerEvents={open ? "auto" : "none"}
        border={open ? "1px solid" : "1px solid transparent"}
        transition="all 0.4s ease"
        placeholder={open ? placeholder : ""}
        {...input}
        ref={ref}
        __css={styles.field}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {rightIconElement && search.length > 0 && (
        <InputRightElement right="1%" left="auto">
          <Icon
            cursor="pointer"
            name={rightIconElement}
            size={rightIconElementSize}
            color={rightIconColor}
            onClick={() => setSearch("")}
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
});

Input.displayName = "Input";
