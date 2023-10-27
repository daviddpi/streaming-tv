import { Input } from "@/components/atoms/Input/Input";
import { Box } from "@chakra-ui/react";

function InputPage() {
  return (
    <Box p="4rem" bg="background" display="flex" justifyContent="end">
      <Box w="35rem" display="flex" justifyContent="end">
        <Input
          placeholder="Titoli, Film, Serie Tv"
          leftIconElement="search"
          leftIconColor="white"
          rightIconElement="close"
          rightIconElementSize="sm"
          rightIconColor="white"
          animate
        />
      </Box>
      <Box w="35rem" display="flex" justifyContent="end">
        <Input
          leftIconElement="search"
          leftIconColor="white"
          rightIconElement="close"
          rightIconElementSize="sm"
          rightIconColor="white"
        />
      </Box>
    </Box>
  );
}

export default InputPage;
