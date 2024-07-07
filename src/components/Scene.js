import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";
import Span from "./Span";
import artworks from "../data/artworks.json";
import gsap from "gsap";
import { AxesHelper } from "three";

export default function Scene() {
  const [clickedObject, setClickedObject] = useState(null);
  const [objectPosition, setObjectPosition] = useState(null);
  const [showInfoSpan, setShowInfoSpan] = useState(true);
  const [data, setData] = useState(null);
  const cameraRef = useRef();
  const canvasRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("position :", cameraRef.current.position);
    }, 1000);

    return () => clearInterval(interval);
  });

  const handleObjectClick = (objectName, objectPosition) => {
    console.log(artworks[objectName].title);
    console.log("objectposition :", objectPosition);
    if (data !== artworks[objectName]) {
      setData(artworks[objectName]);
      setClickedObject(objectName);
      setObjectPosition(objectPosition);
      setShowInfoSpan(false);
      cameraRef.current.lookAt([0, 2, 0]);

      // gsap.to(cameraRef.current.position, {
      //   x: objectPosition.x,
      //   y: objectPosition.y,
      //   z: objectPosition.z - 2,
      //   duration: 1,
      //   ease: "power3.inOut",
      // });
      // gsap.to(cameraRef.current.rotation, {
      //   y: 180,
      //   duration: 1,
      //   ease: "power3.inOut",
      // });
      /*
      2.000002946466787

y: 2.480766004703261e-7
​
z: 5.99999699914473 */
      // gsap.to(cameraRef.current.rotation, {
      //   x: objectPosition.x,
      //   y: objectPosition.y,
      //   z: objectPosition.z,
      //   duration: 1,
      //   ease: "power3.inOut",
      // });
    } else {
      setData(null);
      setClickedObject(null);
      gsap.to(cameraRef.current.position, {
        x: 2,
        y: 0,
        z: 6,
        duration: 1,
        ease: "power3.inOut",
      });
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
          position: [2, 0, 6],
        }}
        onCreated={({ camera }) => {
          cameraRef.current = camera;
        }}
        style={{ height: "100vh", width: "100vw" }}
        ref={canvasRef}
      >
        <Environment
          preset="city"
          background
          backgroundIntensity={4}
          backgroundBlurriness={1}
        />
        <axesHelper scale={[1, 1, 1]} />
        <OrbitControls />
        <directionalLight position={[2, 5, 2]} intensity={2} color={0xe7e7e7} />
        <Model
          onObjectClicked={handleObjectClick}
          clickedObject={clickedObject}
        />
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
            onClick={() => {
              setData(null);
              setClickedObject(null);
              gsap.to(cameraRef.current.position, {
                x: 2,
                y: 0,
                z: 6,
                duration: 1,
                ease: "power3.inOut",
              });
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#242424"
            viewBox="0 0 256 256"
          >
            <path d="M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,1,1,1,5.66,5.66L133.66,128Z"></path>
          </svg>
        </div>
      )}
    </>
  );
}
