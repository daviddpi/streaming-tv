import { Icon } from "@/components/atoms/Icon/Icon";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useEffect } from "react";
import { InputSearch } from "./InputSearch";
import { ISearchProps } from "./Search.props";

export const Search = (props: ISearchProps) => {
  const { open, close, onClose } = props;

  useEffect(() => {
    if (open) {
      gsap.to("#search-menu", {
        x: 0,
        duration: 0.4,
        // scale: 1.111,
        // delay: 0.15,
      });

      // gsap.to("#layout", {
      //   delay: 0.1,
      //   duration: 0.3,
      //   scale: 0.9,
      // });
    }
    if (close) {
      gsap.to("#search-menu", {
        x: "100%",
        duration: 0.4,
        // scale: 1.11,
      });

      // gsap.to("#layout", {
      //   duration: 0.3,
      //   scale: 1,
      // });
    }
  }, [open, close]);

  return (
    <Box zIndex="200" pos="relative">
      <Box
        id="search-menu"
        pos="fixed"
        top="0"
        w="100%"
        h="100vh"
        transform="translateX(100%)"
      >
        {/* <Slide direction="right" in={open}> */}
        <Box w="100%" h="100%" bg="background" color="white">
          <Container>
            <Flex
              alignItems="center"
              gap="0.4rem"
              mb="4rem"
              pt="2.4rem"
              w="max-content"
              cursor="pointer"
              onClick={onClose}
            >
              <Icon
                color="secondary.white"
                {...{ name: "arrow", size: "md" }}
                transform="rotate(90deg)"
              />
              <Text variant="button">Esci</Text>
            </Flex>
          </Container>
          <InputSearch
            placeholder="Cerca Titoli, Film, Serie Tv"
            animate={open}
          />
          <Container>{/* TODO INSERT LIST OF TITLES SEARCHED */}</Container>
        </Box>
      </Box>
      {/* </Slide> */}
    </Box>
  );
};
