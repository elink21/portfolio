import { Button, ButtonGroup } from "@chakra-ui/react";
import styled from "styled-components";

const UI = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;
function Home() {
  return (
    <UI>
      <Button colorScheme="pink">U can click me now! 🏃🏻‍♀️</Button>
    </UI>
  );
}

export default Home;
