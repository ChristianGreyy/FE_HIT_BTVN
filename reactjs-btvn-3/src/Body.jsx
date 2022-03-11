import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import IncreaseNUmber from "./components/IncreaseNumber.jsx";
import ChangeBackgroundColor from "./components/ChangeBackgroundColor.jsx";
import FetchData from "./components/FetchData.jsx";

const Body = () => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li key={"li-1"}>
        <h3>Increase number</h3>
        <IncreaseNUmber />
      </li>
      <li key={"li-2"}>
        <h3>Change background color</h3>
        <ChangeBackgroundColor />
      </li>
      <li key={"li-3"} style={{ marginBottom: 12 }}>
        <h3>Click to load the title</h3>
        <FetchData />
      </li>
    </ul>
  );
};

export default Body;
