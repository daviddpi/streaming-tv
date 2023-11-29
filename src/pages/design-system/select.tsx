import { Flex } from "@chakra-ui/react";
import { Select } from "@/components/atoms/Select/Select";

const options = [
  {
    label: "Azione",
    value: "action",
  },
  {
    label: "Avventura",
    value: "adventure",
  },
  {
    label: "Commedia",
    value: "commdy",
  },
  {
    label: "Crime",
    value: "crime",
  },
  {
    label: "Horror",
    value: "horror",
  },
];

const print = (opt: string) => {
  console.log(opt);
};

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
      <Select label="Generi" options={options} fs={print} />
    </Flex>
  );
}

export default SelectPage;
