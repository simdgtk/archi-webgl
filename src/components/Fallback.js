import { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";

export default function Fallback() {
  const infoTexts = [
    "Once loaded, click on an object to discover it.",
    `I modeled artworks from the
      <a href="https://www.artic.edu/" target="_blank" rel="noreferrer">
        Art Institute of Chicago
      </a>
      , data provides from their open API.`,
  ];
  const [currentInfo, setCurrentInfo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfo((currentInfo) => (currentInfo + 1) % infoTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { progress } = useProgress();

  return (
    <div className="fallback">
      <div className="loader">
        <h1>The scene is loading...</h1>
        <span>{progress < 98 ? progress.toPrecision(2) : 98} %</span>
      </div>
      <div className="info">
        <p dangerouslySetInnerHTML={{ __html: infoTexts[currentInfo] }}></p>
      </div>
    </div>
  );
}
