import React from "react";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Span from "./components/Span";
import Scene from "./components/Scene";
import { Canvas } from "@react-three/fiber";
import reportWebVitals from "./reportWebVitals";
import Fallback from "./components/Fallback";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
      <Canvas
        camera={{
          fov: 8,
          zoom: 0.1,
          near: 0.1,
          far: 1000,
          position: [2, 0, 5],
        }}
      >
        <Scene />
      </Canvas>
      {/* <Span /> */}
    </Suspense>
  </React.StrictMode>
  // <Fallback />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
