import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import "./Home";
import Home from "./Home";
function App() {
  return (
    <ChakraProvider>
      <Home></Home>
    </ChakraProvider>
  );
}

export default App;
