import {
  chakra,
  forwardRef,
  Text,
  omitThemingProps,
  useMultiStyleConfig,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { cx } from "@chakra-ui/shared-utils";
import { CardProps } from "./CardProps";
import Button from "@/components/atoms/Button/Buttons";

export const Card = forwardRef<CardProps, "div">(function Card(props, ref) {
  const { variant } = props;

  const {
    title,
    duration,
    cover,
    href,
    external,
    className,
    children,
    ...rest
  } = omitThemingProps(props);

  const styles = useMultiStyleConfig("Card", { variant, props });

  const shared = { __css: styles.container, ...rest };

  return (
    <chakra.div
      className={cx("chakra-card", className)}
      {...shared}
      backgroundImage={cover}
    >
      <chakra.div className="overlay"></chakra.div>
      <Flex direction="column" justifyContent="space-between" h="100%">
        <chakra.div>
          <Text as="h2" variant="h2" color="white">
            {title}
          </Text>
          <Text className="duration" variant="body2" color="secondary.default">
            {duration}
          </Text>
        </chakra.div>
        <HStack
          flexDir="column"
          alignItems="flex-start"
          className="buttons"
          spacing="1.6rem"
        >
          <Button
            label="Trailer"
            icon="play"
            iconSize="md"
            variant="tertiary"
          />
          <Button
            label="Dettagli"
            color="white"
            icon="info"
            variant="secondary"
          />
        </HStack>
      </Flex>
    </chakra.div>
  );
});
