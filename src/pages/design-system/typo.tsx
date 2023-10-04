import { Box, Text } from "@chakra-ui/react";

function TypoPage() {
  return (
    <Box pl="4rem">
      <Text variant="logo" mb="2rem">
        Logo
      </Text>
      <Text variant="h1" mb="2rem">
        Heading h1
      </Text>
      <Text variant="h2" mb="2rem">
        Heading h2
      </Text>
      <Text variant="h3" mb="2rem">
        Heading h3
      </Text>
      <Text variant="body1" mb="2rem">
        Body 1
      </Text>
      <Text variant="body2" mb="2rem">
        Body 2
      </Text>
      <Text variant="button" mb="2rem">
        Button
      </Text>
    </Box>
  );
}

export default TypoPage;
