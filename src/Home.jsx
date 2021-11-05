import { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Scene from "./Scene"
const Model = () => {
  const gltf = useLoader(GLTFLoader, "./cassette_tape/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

const UI = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default function App() {
  return (
    <UI>
      <Canvas id="canvas">
        <OrbitControls/>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </UI>
  );
}
