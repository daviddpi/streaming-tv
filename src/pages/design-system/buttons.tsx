import Button from "@/components/atoms/Button/Buttons";
import { Flex } from "@chakra-ui/react";

function ButtonsPage() {
  return (
    <Flex
      flexDir="column"
      alignItems="start"
      p="4rem"
      gap="2rem"
      bg="lightgray"
    >
      <Button label="Button" />
      <Button label="Riproduci" color="white" icon="play" iconSize="md" variant="primary" />
      <Button label="Button Icon" icon="info" variant="secondary" />
      <Button label="Button Icon" icon="ring" iconRight variant="tertiary" />
      <Button icon="search" iconSize="lg" variant="icon" />
      <Button variant="linkPrimary" tag="link" label="Icon page" href="/design-system/icons" />
      <Button
        variant="linkSecondary"
        tag="link"
        label="Chakra Docs"
        href="https://chakra-ui.com/"
        external
      />
    </Flex>
  );
}

export default ButtonsPage;
