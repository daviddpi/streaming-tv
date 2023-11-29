import { Flex } from "@chakra-ui/react";
import { Select } from "@/components/atoms/Select/Select";

const options = ["Azione", "Avventura", "Commedia", "Crime", "Horror"];

function SelectPage() {
  return (
    <Flex
      alignItems="start"
      justifyContent="start"
      h="100vh"
      p="4rem"
      gap="2rem"
      bg="background"
    >
      <Select label="Generi" options={options} />
    </Flex>
  );
}

export default SelectPage;
