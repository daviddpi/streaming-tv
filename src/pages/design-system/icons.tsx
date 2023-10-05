import { Flex } from "@chakra-ui/react";
import Icon from "@/components/Icon/Icon";

function IconsPage() {
  return (
    <Flex alignItems="center" p="4rem" gap="2rem" bg="lightgray">
      <Icon name="play" size="lg" />
      <Icon name="info"  />
      <Icon name="ring"  />
      <Icon name="star" size="sm"  />
      <Icon name="emptyStar" size="sm"  />
      <Icon name="halfStar" size="sm"  />
      <Icon name="search"  />
      <Icon name="arrow" size="sm"  />
    </Flex>
  );
}

export default IconsPage;
