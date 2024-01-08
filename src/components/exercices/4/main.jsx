import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Counter.jsx";
import Message from "./Message.jsx";
import ChangeColor from "./ChangeColor.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Message message="Hello, world!" />
    <App />
    <ChangeColor />
  </React.StrictMode>
);
