import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraControls } from "@react-three/drei";
import * as THREE from "three";
import Model from "./Model";
import Span from "./Span";
import artworks from "../data/artworks.json";

export default function Scene() {
  const [clickedObject, setClickedObject] = useState(null);
  const [showInfoSpan, setShowInfoSpan] = useState(true);
  const [data, setData] = useState(null);

  const handleObjectClick = (objectName) => {
    setData(artworks[objectName]);
    setClickedObject(objectName);
    setShowInfoSpan(false);
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
        <pointLight intensity={10} />
        <directionalLight position={[2, 5, 2]} intensity={7} color={0xe7e7e7} />
        <CameraControls />
        <Model onObjectClicked={handleObjectClick} table />
      </Canvas>
      {showInfoSpan && <Span />}
      {clickedObject && (
        <div className="site-container object">
          <div className="info-object">
            <div className="object-texts">
              <div className="head-infos">
                {data.title && <h2>{data.title}</h2>}
                <span>
                  {data.date_start}, {data.artist_title}
                </span>
              </div>
              <div className="infos-flex">
                {data.dimensions_detail[0].height && (
                  <span>
                    Dimensions: {data.dimensions_detail[0].height} ×{" "}
                    {data.dimensions_detail[0].width} cm
                  </span>
                )}
                {data.medium_display && (
                  <span>Medium: {data.medium_display}</span>
                )}
              </div>
              <p>{data.artist_display}</p>
              <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
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
