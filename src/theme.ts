// src/theme.ts
import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#636363",
      700: "#202020",
      800: "#121212",
      900: "#111111",
    },
    white: {
      50: "#ffffff",
      100: "#f0f0f0",
      200: "#e0e0e0",
      300: "#d0d0d0",
      400: "#c0c0c0",
      500: "#b0b0b0",
      600: "#a0a0a0",
      700: "#909090",
      800: "#808080",
      900: "#707070",
    },
  },
});

export default theme;
