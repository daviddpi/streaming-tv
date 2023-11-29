import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { SelectProps } from "./SelectProps";
import Button from "../Button/Buttons";

export const Select = (props: SelectProps) => {
  const { label, options, fs, ...rest } = props;

  const styles = useMultiStyleConfig("Select", { props });

  const shared = { __css: styles.list, ...rest };

  return (
    <Menu autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            label={label}
            as={Button}
            variant="linkSecondary"
            icon="arrow"
            iconSize="sm"
            iconRight
          />
          <MenuList {...shared}>
            {options.map((opt, i) => (
              <MenuItem
                value={opt.value}
                key={i}
                onClick={() => fs && fs(opt.value)}
              >
                {opt.label}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};
