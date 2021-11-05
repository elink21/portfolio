/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: YogoshimoMoritz (https://sketchfab.com/YogoshimoMoritz)
license: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
source: https://sketchfab.com/models/875fe7afd0024eafadeb0c73dc85d57b
title: Bit.Bot.2
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/scene.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    actions["mixamo.com"].play();
  });

  
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} scale={0.0003} />
          <skinnedMesh
            geometry={nodes["BitBit_-_Bot_palette_0"].geometry}
            material={materials.palette}
            skeleton={nodes["BitBit_-_Bot_palette_0"].skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
