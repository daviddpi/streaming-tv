import { chakra, forwardRef, useStyleConfig } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselProps } from "./CarouselProps";
import { cx } from "@chakra-ui/shared-utils";

export const Carousel = forwardRef<CarouselProps, "div">(function Carousel(
  props,
  ref
) {
  const { children, options, className, variant, ...rest } = props;

  const [emblaRef] = useEmblaCarousel(options);

  const styles = useStyleConfig("Carousel", { variant, props });

  const shared = { __css: styles, ...rest };

  return (
    <chakra.div
      {...shared}
      className={cx("chakra-carousel", className)}
      ref={emblaRef}
    >
      <chakra.div className="embla-container">{children}</chakra.div>
    </chakra.div>
  );
});

export default Carousel;
