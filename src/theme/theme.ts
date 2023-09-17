import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    green: {
      100: "#93D50A",
    },
    grey: {
      100: "#F4EFEF",
      200: "#D2DADA",
      300: "#45484F",
      400: "rgba(51, 51, 51, 0.70)",
      500: "rgba(69, 72, 79, 0.70);",
      600: "#667085",
    },
    black: {
      100: "#000",
      200: "#2F2F2F",
      300: "#292929",
    },
    white: {
      100: "#fff",
      200: "#DFE5E6",
    },
  },
});
export default theme;
