import React from "react";
import "./DisplayName.css";

const DisplayName = ({ name }) => {
  return <h1 className="display-name">Hello, {name}!</h1>;
};

export default DisplayName;
