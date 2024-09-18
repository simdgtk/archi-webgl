import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";
import Span from "./Span";
import artworks from "../data/artworks.json";
import gsap from "gsap";

export default function Scene() {
  // const [clickedObject, setClickedObject] = useState(null);
  // const [objectPosition, setObjectPosition] = useState(null);
  // const [showInfoSpan, setShowInfoSpan] = useState(true);
  // const [data, setData] = useState(null);
  const cameraRef = useRef();
  const canvasRef = useRef();

  // const handleObjectClick = (objectName, objectPosition) => {
  //   if (data !== artworks[objectName]) {
  //     setData(artworks[objectName]);
  //     setClickedObject(objectName);
  //     setObjectPosition(objectPosition);
  //     setShowInfoSpan(false);
  //     gsap.to(cameraRef.current.position, {
  //       x: 2,
  //       y: 0,
  //       z: 0,
  //       duration: 1,
  //       ease: "power3.inOut",
  //     });
  //     gsap.to(cameraRef.current, {
  //       zoom: 1.6,
  //       duration: 1,
  //       ease: "power3.inOut",
  //       onUpdate: () => {
  //         cameraRef.current.updateProjectionMatrix();
  //       },
  //     });
  //     gsap.from(".text", {
  //       opacity: 0,
  //       x: -10,
  //       duration: 0.3,
  //       ease: "power3.inOut",
  //       stagger: 0.03,
  //     });
  //   } else {
  //     setData(null);
  //     setClickedObject(null);

  //     gsap.to(cameraRef.current.position, {
  //       x: 2,
  //       y: 0,
  //       z: 6,
  //       duration: 1,
  //       ease: "power3.inOut",
  //     });
  //     gsap.to(cameraRef.current, {
  //       zoom: 1,
  //       duration: 1,
  //       ease: "power3.inOut",
  //       onUpdate: () => {
  //         cameraRef.current.updateProjectionMatrix();
  //       },
  //     });
  //   }
  // };

  return (
    <>
      <Canvas
        moz-opaque
        camera={{
          fov: 70,
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
        <OrbitControls enableDamping maxDistance={5} minDistance={5} />
        <directionalLight
          position={[2, 10, 2]}
          intensity={2}
          color={0xe7e7e7}
        />
        <ambientLight intensity={5} />
        <Model />
        {/* <Model
          onObjectClicked={handleObjectClick}
          clickedObject={clickedObject}
        /> */}
      </Canvas>
      {/* {showInfoSpan && <Span />}
      {clickedObject && (
        <div className="site-container object">
          <div className="info-object">
            <div className="object-texts">
              <div className="head-infos">
                {data.title && <h2 className="text">{data.title}</h2>}
                <span className="text">
                  {data.date_start}, {data.artist_title}
                </span>
              </div>
              <div className="infos-flex text">
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
              <p className="text">{data.artist_display}</p>
              <div
                className="text-container text"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
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
                onUpdate: () => {
                  cameraRef.current.lookAt(0, 0, 0);
                },
              });
              gsap.to(cameraRef.current, {
                zoom: 1,
                duration: 1,
                ease: "power3.inOut",
                onUpdate: () => {
                  cameraRef.current.updateProjectionMatrix();
                },
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
      )} */}
    </>
  );
}
