import { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls, MapControls } from "@react-three/drei";
import styled from "styled-components";
import RobotAnimation from "./RobotAnimation";
import { Heading } from "@chakra-ui/react";
import MenuBar from "./MenuBar";
import { Icon } from "@chakra-ui/react";
import { BsCodeSquare } from "react-icons/bs";
import { BsController } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./cassette_tape/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};
const HomeUIGrid = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  color: white;

  grid-template-columns: 3.5rem 7fr 5fr;
`;

const PresentationCard = styled.div`
  padding: 20px;
  display: grid;
  text-align: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 2px;
`;

export default function App() {
  return (
    <HomeUIGrid>
      <MenuBar></MenuBar>

      <PresentationCard>
        <div>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ ease: "anticipate", duration: 2 }}
          >
            <IconContainer>
              <Icon as={BsCodeSquare} w={10} h={10} />
              <Icon as={BsController} w={10} h={10} />
              <Icon as={FaAws} w={10} h={10} />
            </IconContainer>
          </motion.div>
          <br />

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ ease: "anticipate", duration: 2 }}
          >
            <Heading size={"2xl"}> Elias Segundo Antonio</Heading> <br />
            <Heading size={"sm"}>Web Developer & SRE Apprentice</Heading>
          </motion.div>

          <br />
          <br />
          <br />

          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ ease: "anticipate" , delay:1, duration:1}}
          >
            <Button backgroundColor={"primary"}>
              Give a look to my projects!
            </Button>
          </motion.div>
        </div>
      </PresentationCard>

      <Canvas id="canvas">
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <RobotAnimation />
        </Suspense>
      </Canvas>
    </HomeUIGrid>
  );
}
