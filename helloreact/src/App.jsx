// import { useState } from "react";
// import reactLogo from "./assets/react.svg";

import "./App.css";

import PropTypes from "prop-types";

function App(props) {
  return (
    <>
      <h1>Welcome to my site</h1>
      <p>This is my first React app</p>
      <p>Hello {props.firstname}</p>
    </>
  );
}

App.propTypes = {
  firstname: PropTypes.string.isRequired,
};

export default App;
