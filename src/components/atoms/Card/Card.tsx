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
import { useMediaQueries } from "@/hook/useMediaQueries";

const cutText = (text: string) => {
  if (text.length >= 25) {
    return text.substring(0, 25) + "...";
  }
  return text;
};

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

  const { isMobile, isTablet } = useMediaQueries();

  return (
    <chakra.div
      className={cx("chakra-card", className)}
      {...shared}
      backgroundImage={cover}
    >
      <chakra.div className="overlay"></chakra.div>
      <Flex direction="column" justifyContent="space-between" h="100%">
        <chakra.div>
          <Text
            className="title"
            as={isMobile || isTablet ? "h3" : "h2"}
            variant={isMobile || isTablet ? "h3" : "h2"}
            color="white"
            title={title}
          >
            {cutText(title ?? "")}
          </Text>
          <Text className="duration" variant="body2" color="secondary.default">
            {duration}
          </Text>
        </chakra.div>
        <HStack
          flexDir={isMobile || isTablet ? "row" : "column"}
          alignItems="flex-start"
          className="buttons"
          spacing="1.6rem"
        >
          <Button
            label={isMobile || isTablet ? "" : "Trailer"}
            icon="play"
            iconSize={isMobile || isTablet ? "sm" : "md"}
            variant="tertiaryRounded"
          />
          <Button
            label={isMobile || isTablet ? "" : "Dettagli"}
            color="white"
            icon="info"
            iconSize={isMobile || isTablet ? "sm" : "md"}
            variant="secondaryRounded"
          />
        </HStack>
      </Flex>
    </chakra.div>
  );
});
