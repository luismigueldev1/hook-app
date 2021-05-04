import React, { useEffect, useState } from "react";

export default function Message() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseCoord = ({ x, y }) => {
      setCoords({
        x,
        y,
      });
    };
    window.addEventListener("mousemove", mouseCoord);

    return () => {
      window.removeEventListener("mousemove", mouseCoord);
    };
  }, []);
  return (
    <div>
      <h3>Eres genial</h3>
      <p>Las coords del mouse son: {`x:${coords.x} y:${coords.y}`}</p>
    </div>
  );
}
