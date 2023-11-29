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
  const { options, ...rest } = props;

  const styles = useMultiStyleConfig("Select", { props });

  const shared = { __css: styles.list, ...rest };

  return (
    <Menu autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            label="Generi"
            as={Button}
            variant="linkSecondary"
            icon="arrow"
            iconSize="sm"
            iconRight
          />
          <MenuList {...shared}>
            {options.map((opt, i) => (
              <MenuItem key={i}>{opt}</MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};
