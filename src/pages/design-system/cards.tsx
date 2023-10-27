import { Flex } from "@chakra-ui/react";
import { Card } from "@/components/atoms/Card/Card";

function CardPage() {
  return (
    <Flex alignItems="center" p="4rem" gap="2rem" bg="background">
      <Card title="Titolo film" variant="vertical" />
      <Card
        title="Fast X"
        duration="2h 21m"
        cover="https://image.tmdb.org/t/p/w400/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
      />
      <Card title="Titolo film" variant="horizontal" />
    </Flex>
  );
}

export default CardPage;
