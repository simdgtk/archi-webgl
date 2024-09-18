import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("./compressed_earth2.glb");
  return (
    <group {...props} dispose={null} position={[0, 0, 0]} scale={0.005}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object.geometry}
        material={materials.object}
      />
    </group>
  );
}

useGLTF.preload("/compressed_earth2.glb");

export default Model;
