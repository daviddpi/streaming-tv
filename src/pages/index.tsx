import { Box, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Index() {
  return (
    <Box bg="background">
      <Heading fontSize="4rem" color="white">
        Streaming<Text as="sup" color="primary">TV</Text>
      </Heading>
      <Text color="tertiary" fontWeight="bold" fontSize="1.6rem">
        Hello, Next.js & Chakra UI!
      </Text>
    </Box>
  );
}
