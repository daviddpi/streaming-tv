import { Header } from "@/components/organisms/Header/Header";
import { Box } from "@chakra-ui/react";

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
  return (
    <Box background="background" pt="5.65rem" color="white" minH="100vh">
      <Header links={links} pos="fixed" top="0" />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
