import { Container, Flex, Heading, Text, forwardRef } from "@chakra-ui/react";
import { HeaderProps } from "./HeaderProps";
import Button from "@/components/atoms/Button/Buttons";
import { Input } from "@/components/atoms/Input/Input";
import Link from "next/link";
import { useMediaQueries } from "@/hook/useMediaQueries";

export const Header = forwardRef((props: HeaderProps, ref) => {
  const { links, ...rest } = props;

  const { isMobile, isTablet } = useMediaQueries();

  return (
    <Container
      ref={ref}
      backdropFilter="blur(.15rem)"
      backgroundImage="linear-gradient(180deg,rgba(25, 24, 26, .7) 10%,transparent)"
      as="header"
      pt="1rem"
      {...rest}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex
          gap={isMobile || isTablet ? "1.8rem" : "4rem"}
          flexDirection={isMobile ? "column" : "row"}
        >
          <Link href="/">
            <Heading
              fontSize={isMobile || isTablet ? "3.2rem" : "4rem"}
              color="white"
            >
              Streaming
              <Text as="sup" color="primary.default">
                TV
              </Text>
            </Heading>
          </Link>
          <Flex gap={isMobile || isTablet ? "1.8rem" : "2rem"}>
            {links?.map((link, i) => (
              <Button
                key={i}
                label={link.text}
                tag="link"
                href={link.route}
                variant="linkSecondary"
              />
            ))}
          </Flex>
        </Flex>
        <Flex
          justifyContent="flex-end"
          gap={isMobile || isTablet ? "1.6rem" : "2rem"}
        >
          <Input
            placeholder="Titoli, Film, Serie Tv"
            leftIconElement="search"
            leftIconColor="white"
            rightIconElement="close"
            rightIconElementSize="sm"
            rightIconColor="white"
            animate
          />
          <Button icon="ring" variant="linkSecondary" />
        </Flex>
      </Flex>
    </Container>
  );
});
