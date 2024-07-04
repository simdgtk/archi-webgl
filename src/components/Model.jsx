import React from "react";
import { useGLTF } from "@react-three/drei";

const Model = ({ onObjectClicked, juicer, venus, plate, table, picture }) => {
  const { nodes, materials } = useGLTF("/main.gltf");
  const greyMaterial = <meshStandardMaterial color="#A6A6A6" roughness={1} />;

  return (
    <group
      dispose={null}
      scale={0.4}
      rotation-y={Math.PI * -0.108}
      rotation-x={Math.PI * 0}
      position={[0, -1, 0]}
    >
      {/* Juicy Salif Juicer */}
      <group
        onClick={() => onObjectClicked("237824")}
        position={[-2.395, 3.201, -0.848]}
        rotation={[0, 0.069, 0]}
        scale={0.309}
      >
        <mesh
          geometry={nodes.BézierCurve026.geometry}
          material={materials.metal}
        />
        <mesh
          geometry={nodes.BézierCurve026_1.geometry}
          material={materials.metal2}
        />
      </group>
      {/* Venus Chair */}
      <mesh
        onClick={() => onObjectClicked("201626")}
        geometry={nodes.chair_one.geometry}
        material={materials.chair}
        position={[-4.547, 1.572, -0.391]}
        rotation={[Math.PI, 0.362, 0]}
        scale={[1.213, 1, 1]}
      />
      {/* Venus Chair */}
      <mesh
        onClick={() => onObjectClicked("201626")}
        geometry={nodes.chair_two.geometry}
        material={materials.chair}
        position={[-1.415, 1.572, -3.41]}
        rotation={[Math.PI, 1.111, 0]}
        scale={[1.213, 1, 1]}
      />
      {/* Black Gold Plate */}
      <mesh
        onClick={() => onObjectClicked("197531")}
        geometry={nodes.plates.geometry}
        material={materials.plate}
        position={[-2.201, 2.51, 0.271]}
        rotation={[1.571, 0.022, -1.571]}
        scale={0.349}
      />
      {/* Coffee Table */}
      <mesh
        onClick={() => onObjectClicked("104090")}
        geometry={nodes.table.geometry}
        material={materials.table}
        position={[-1.9, 2.387, -0.071]}
        rotation={[0, -0.121, 0]}
      >
        {" "}
        {table && <meshStandardMaterial color="#A6A6A6" roughness={1} />}
      </mesh>
      {/* Untitled #12 */}
      <group onClick={() => onObjectClicked("89403")} position={[0, 1.523, 0]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.picture} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.grey} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials.door} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials.mur} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials.grey} />
    </group>
  );
};

export default Model;
