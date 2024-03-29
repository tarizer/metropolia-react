import { useState } from "react";
import "./App.css";

export function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((count) => count + 1);
  };
  const decrementCounter = () => {
    setCount((count) => count - 1);
  };
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <>
      <h3>
        You have pressed the button {count} {count > 1 ? "times" : "time"}
      </h3>
      <div className="counter">
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </>
  );
}
