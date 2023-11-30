import { Card } from "@/components/atoms/Card/Card";
import Carousel from "@/components/molecules/Carousel/Carousel";
import { Container } from "@chakra-ui/react";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  containScroll: "trimSnaps",
};

function CarouselPage() {
  return (
    <>
      <Container h="50rem" bg="background">
        <Carousel options={OPTIONS}>
          {[...Array(25)].map((x, i) => (
            <Card
              key={i}
              title="fast and furious X"
              duration="2h 21m"
              cover="https://image.tmdb.org/t/p/w400/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            />
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export default CarouselPage;
