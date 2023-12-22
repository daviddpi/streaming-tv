import { Header } from "@/components/organisms/Header/Header";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useMediaQueries } from "@/hook/useMediaQueries";

type Props = { children: React.ReactNode };

const links = [
  {
    text: "Film",
    route: "film",
  },
  {
    text: "Serie Tv",
    route: "series",
  },
];

const Layout = ({ children }: Props) => {
  const { isMobile } = useMediaQueries();

  const [height, setHeight] = useState(isMobile ? 40 : 50);
  const ref = useRef();

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const heightHeader = (ref.current as HTMLElement).clientHeight;
        setHeight(50 + heightHeader);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <Box
      id="layout"
      background="background"
      pt={height + "px"}
      color="white"
      minH="100vh"
    >
      <Header ref={ref} links={links} pos="fixed" top="0" />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
