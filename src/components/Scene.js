import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraControls } from "@react-three/drei";
import * as THREE from "three";
import Model from "./Model";

export default function Scene() {
  const [clickedObject, setClickedObject] = useState(null);

  const handleObjectClick = (objectName) => {
    setClickedObject(objectName);
  };

  const renderObjectInfo = () => {
    switch (clickedObject) {
      case "table":
        return (
          <>
            <h2>Table</h2>
          </>
        );
      case "chair_one":
        return <h2>Chair 1</h2>;
      case "chair_two":
        return <h2>Chair 2</h2>;
      case "plates":
        return <h2>Plates</h2>;
      default:
        return null;
    }
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
          scene.background = new THREE.Color(0xe7e7e7);
        }}
      >
        <OrbitControls makeDefault />
        <pointLight intensity={40} />
        <directionalLight position={[2, 5, 2]} intensity={7} color={0xe7e7e7} />
        <CameraControls />
        <Model onObjectClicked={handleObjectClick} />
      </Canvas>
      {clickedObject && (
        <div className="site-container object">
          <div className="info-object">
            <div className="object-texts">
              <div className="head-infos">
                {renderObjectInfo()}
                <span>2002, Ineke Hans</span>
              </div>
              <div className="infos-flex">
                <span>Dimensions : 3 × 21 cm</span>
                <span>Medium : Black porcelain </span>
              </div>
              <p>
                Manufactured by Ineke Hans/Arnhem <br></br> Dutch, founded 1998
              </p>
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
            <p>
              Source,{" "}
              <a href="https://www.artic.edu/" target="_blank" rel="noreferrer">
                artic.edu
              </a>
            </p>
          </div>
          <svg
            onClick={() => setClickedObject(null)}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#242424"
            viewBox="0 0 256 256"
          >
            <path d="M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"></path>
          </svg>
        </div>
      )}
    </>
  );
}
