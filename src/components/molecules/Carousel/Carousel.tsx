import { chakra, forwardRef, useStyleConfig } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselProps } from "./CarouselProps";
import { cx } from "@chakra-ui/shared-utils";
import { useEffect, useRef, useState } from "react";

export const Carousel = forwardRef<CarouselProps, "div">(function Carousel(
  props,
  ref
) {
  const { children, options, className, variant, ...rest } = props;

  const styles = useStyleConfig("Carousel", { variant, props });

  const shared = { __css: styles, ...rest };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [classes, setClasses] = useState("");

  useEffect(() => {
    if (emblaApi) {
      const lastSlide = emblaApi.slideNodes().length - 1;

      if (emblaApi.slidesInView().includes(0)) {
        setCurrentSlide(0);
        setClasses("first");
      }

      const handleScrollEvent = () => {
        if (emblaApi.slidesInView().includes(0)) {
          setCurrentSlide(0);
          setClasses("first");
        }
        console.log();
        if (emblaApi.slidesInView().includes(lastSlide)) {
          setCurrentSlide(lastSlide);
          setClasses("last");
        }
        if (
          !emblaApi.slidesInView().includes(0) &&
          !emblaApi.slidesInView().includes(lastSlide)
        ) {
          setClasses("");
        }
      };

      emblaApi.on("scroll", handleScrollEvent);

      return () => {
        emblaApi.off("scroll", handleScrollEvent);
        emblaApi.destroy();
      };
    }
  }, [emblaApi]);

  return (
    <chakra.div
      {...shared}
      className={cx("chakra-carousel", className, classes)}
      ref={emblaRef}
    >
      <chakra.div className="embla-container">{children}</chakra.div>
    </chakra.div>
  );
});

export default Carousel;
