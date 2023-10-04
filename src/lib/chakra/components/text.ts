import { defineStyleConfig } from "@chakra-ui/react";
import { text } from "@/lib/chakra/theme";

export const Text = defineStyleConfig({
  variants: {
    ...text,
  },
});
