import Carousel from "@/components/molecules/Carousel/Carousel";
import { Box, Text } from "@chakra-ui/react";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  containScroll: "trimSnaps",
};

function CarouselPage() {
  return (
    <>
      <Box h="50rem" p="4rem" bg="darkblue">
        <Carousel options={OPTIONS}>
          {[...Array(25)].map((x, i) => (
            <Box
              h="100%"
              w="375px"
              bg="black"
              borderRadius="0.8rem"
              border="2px solid black"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={i}
            >
              <Text variant="h2">Slide {i}</Text>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
}

export default CarouselPage;
