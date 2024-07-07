import { Suspense } from "react";
import Fallback from "./components/Fallback";
import Scene from "./components/Scene";
import "./styles/index.scss";

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Scene />
      {/* <Span /> */}
    </Suspense>
  );
}

export default App;
