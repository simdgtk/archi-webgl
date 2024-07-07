import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

function Box(props) {
  const mesh = useRef();
  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <>
      <mesh {...props} ref={mesh} onClick={() => setPopupVisible(true)}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      {isPopupVisible && (
        <Html position={[0, 0, 0]}>
          <div className="popup">
            <p>Objet cliqué !</p>
            <button onClick={() => setPopupVisible(false)}>Fermer</button>
          </div>
        </Html>
      )}
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
