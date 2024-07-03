import { useState } from "react";

export default function Span() {
  const [spanHidden, setSpanHidden] = useState(false);
  return (
    <div className={spanHidden ? "info-span hidden" : "info-span"}>
      <p>Click on a object from the scene to discover it</p>
    </div>
  );
}
