import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { HeaderProps } from "./HeaderProps";
import Button from "@/components/atoms/Button/Buttons";
import { Input } from "@/components/atoms/Input/Input";
import Link from "next/link";

export const Header = (props: HeaderProps) => {
  const { links, ...rest } = props;

  return (
    <Container
      backdropFilter="blur(.15rem)"
      backgroundImage="linear-gradient(180deg,rgba(25, 24, 26, .7) 10%,transparent)"
      p="0.4rem 0"
      as="header"
      {...rest}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap="4rem">
          <Link href="/">
            <Heading fontSize="4rem" color="white">
              Streaming
              <Text as="sup" color="primary.default">
                TV
              </Text>
            </Heading>
          </Link>
          <Flex gap="2rem">
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
        <Flex justifyContent="flex-end" gap="2rem">
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
};
