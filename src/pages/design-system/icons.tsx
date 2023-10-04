import { Flex } from "@chakra-ui/react";
import Icon from "@/components/Icon/Icon";

function IconsPage() {
  return (
    <Flex alignItems="center" p="4rem" gap="2rem" bg="lightgray">
      <Icon name="play" size="large" />
      <Icon name="info"  />
      <Icon name="ring"  />
      <Icon name="star" size="small"  />
      <Icon name="emptyStar" size="small"  />
      <Icon name="halfStar" size="small"  />
      <Icon name="search"  />
      <Icon name="arrow" size="small"  />
    </Flex>
  );
}

export default IconsPage;
