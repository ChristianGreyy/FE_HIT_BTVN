import { useState } from "react";
import React from "react";
import "../App.css";

const ChangeBackgroundColor = () => {
  const [backgroundColor, setbackgroundColor] = useState("aqua");

  return (
    <React.Fragment>
      <div
        className="body"
        style={{ backgroundColor }}
        onMouseDown={() => {
          setbackgroundColor("green");
        }}
      >
        change background color
      </div>
    </React.Fragment>
  );
};

export default ChangeBackgroundColor;
