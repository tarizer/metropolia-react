/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AgeCheck from "./AgeCheck.jsx";
import "./index.css";
import Calculator from "./Calculator.jsx";
import UserRegistration from "./UserRegistration.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AgeCheck /> */}
    {/* <Calculator /> */}
    <UserRegistration />
  </React.StrictMode>
);
