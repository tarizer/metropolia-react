import { useState } from "react";

export const ChangeColor = () => {
  const [color, setColor] = useState("black");
  const handleClick = () => {
    color === "black" ? setColor("red") : setColor("black");
  };

  return (
    <>
      <p style={{ color: color }}>Hello World!</p>
      <button onClick={handleClick}>Change color</button>
    </>
  );
};
