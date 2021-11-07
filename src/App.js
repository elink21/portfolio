import "./App.css";
import Home from "./Home";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { portfolioTheme } from "./Theming/theme";

import "@fontsource/montserrat"
export default function App() {
  return (
    <ChakraProvider theme={portfolioTheme}>
      <Home />
    </ChakraProvider>
  );
}
