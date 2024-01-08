import { useState } from "react";
// import "./App.css";

function Calculator() {
  const [number, setNumber] = useState({});
  const [result, setResult] = useState(0);

  const onClickHandler = (e) => {
    if (e.target.name === "+") setResult(number.n1 + number.n2);
    else if (e.target.name === "-") setResult(number.n1 - number.n2);
  };
  const onChangeHandler = (e) => {
    setNumber({
      ...number,
      [e.target.name]: Number(e.target.value),
    });
  };

  return (
    <>
      <p>Result: {result}</p>
      <form className="calculator">
        <input name="n1" onChange={onChangeHandler} />
        <input name="n2" onChange={onChangeHandler} />
        <button type="button" name="+" onClick={onClickHandler}>
          +
        </button>
        <button type="button" name="-" onClick={onClickHandler}>
          -
        </button>
      </form>
    </>
  );
}

export default Calculator;
