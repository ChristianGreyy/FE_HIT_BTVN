import { useState } from "react";
import React from "react";
import "../App.css";

const IncreaseNumber = () => {
  const [number, setNumber] = useState(1);
  return (
    <React.Fragment>
      <div>{number}</div>
      <button
        style={{ marginTop: 12 }}
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increase
      </button>
    </React.Fragment>
  );
};

export default IncreaseNumber;
