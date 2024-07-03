import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraControls } from "@react-three/drei";
import * as THREE from "three";
import Model from "./Model";
import { useGLTF } from "@react-three/drei";

export default function Scene() {
  const [objectClicked, setObjectClicked] = useState(false);

  const toggleObject = () => {
    setObjectClicked(!objectClicked);
    console.log("Clicked");
  };

  return (
    <>
      <Canvas
        camera={{
          fov: 8,
          zoom: 0.1,
          near: 0.1,
          far: 1000,
          position: [2, 0, 5],
        }}
        onCreated={({ scene }) => {
          scene.background = new THREE.Color(0xe1e1e1);
        }}
      >
        <OrbitControls makeDefault />
        <pointLight intensity={40} />
        <directionalLight position={[2, 5, 2]} intensity={7} color={0xe1e1e1} />
        <CameraControls />
        <Model onClicked={toggleObject} />
      </Canvas>
      {objectClicked && (
        <div className="site-container object">
          <div className="info-object">
            <div className="object-texts">
              <div className="head-infos">
                <h2>Black Gold Plate</h2>
                <span>2002, Ineke Hans</span>
              </div>
              <div className="infos-flex">
                <span>Dimensions : 3 × 21 cm</span>
                <span>Medium : Black porcelain </span>
              </div>
              <p>Manufactured by Ineke Hans/Arnhem <br></br> Dutch, founded 1998</p>
              <p>
                After decades as a representational painter, in her seventies
                Alma Thomas turned to abstraction, creating shimmering,
                mosaic-like fields of color with rhythmic dabs of paint that
                were often inspired by forms from nature. The artist had been
                fascinated with space exploration since the late 1960s, and her
                later paintings often referenced America’s manned Apollo
                missions to the moon. Although she had never flown, Thomas began
                to paint as if she were in an airplane, capturing what she
                described as shifting patterns of light and streaks of color.
                “You look down on things,” she explained. “You streak through
                the clouds so fast. . . .
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

useGLTF.preload("/main.gltf");
