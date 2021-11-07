import { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls, MapControls } from "@react-three/drei";
import styled from "styled-components";
import RobotAnimation from "./RobotAnimation";
import { Heading, HStack } from "@chakra-ui/react";
import MenuBar from "./MenuBar";
import { Icon } from "@chakra-ui/react";
import { BsCodeSquare } from "react-icons/bs";
import { BsController } from "react-icons/bs";
import {
  FaAws,
  FaFacebook,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
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

const SocialDiv = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  justify-items: center;
`;
const HomeUIGrid = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  color: white;

  grid-template-columns: 3.5rem 7fr 5fr;
`;

const PresentationCard = styled.div`
  padding: 0px;
  display: grid;
  max-height: 100%;
  text-align: center;
  align-items: center;
  justify-items: center;
  grid-template-rows: 7fr 1fr;
`;

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;

  gap: 2px;
`;

const NameDiv = styled.div`
  display: grid;
  align-items: center;
`;

export default function App() {
  return (
    <HomeUIGrid>
      <MenuBar></MenuBar>

      <PresentationCard>
        <NameDiv>
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
            transition={{ ease: "anticipate", delay: 1, duration: 1 }}
          >
            {" "}
            <br /> <br />
            <motion.div
              animate={{ x: 20 }}
              transition={{
                duration: 0.18,
                ease: "easeInOut",
                stiffness: 2,
                repeatType: "mirror",
                repeat: 5,
                delay: 3,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Button size={"lg"} colorScheme={"teal"}>
                Give a look to my projects!
              </Button>
            </motion.div>
          </motion.div>
        </NameDiv>
        <SocialDiv>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            
            <Heading size={"xs"}>Reach me out via </Heading> <br />
            <HStack>
              <Button
                size={"sm"}
                colorScheme="github"
                color={"white"}
                variant={"outline"}
                leftIcon={<FaGithub />}
              >
                GitHub
              </Button>
              <Button
                size={"sm"}
                colorScheme="teal"
                variant={"outline"}
                leftIcon={<FaLinkedin />}
              >
                Linkedin
              </Button>

              <Button
                size={"sm"}
                colorScheme="blue"
                variant={"outline"}
                leftIcon={<FaFacebook />}
              >
                Facebook
              </Button>
            </HStack>
          </motion.div>
        </SocialDiv>
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
