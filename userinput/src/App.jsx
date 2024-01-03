import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const onChangeHandle = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Hello {name}</h1>
      <input value={name} onChange={onChangeHandle} />
    </>
  );
}

export default App;
