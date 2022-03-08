import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

const Body = () => {
  const [number, setNumber] = useState(1);
  const [backgroundColor, setbackgroundColor] = useState("aqua");
  const [page, setPage] = useState(5);
  const [data, setData] = useState(null);
  useEffect(async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${page}`
    );
    setData(await response.json());
    // setData(data);
  }, [page]);

  console.log(page);
  //   {
  //     console.log(data);
  //   }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li key={"li-1"}>
        <h3>Increase number</h3>
        <div>{number}</div>
        <button
          style={{ marginTop: 12 }}
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Increase
        </button>
      </li>
      <li key={"li-2"}>
        <h3>Change background color</h3>
        <div
          className="body"
          style={{ backgroundColor }}
          onMouseDown={() => {
            setbackgroundColor("green");
          }}
        >
          change background color
        </div>
      </li>
      <li key={"li-3"} style={{ marginBottom: 12 }}>
        <h3>Click to load the title</h3>
        <button
          onClick={() => {
            setPage(page + 5);
          }}
        >
          Fetch data
        </button>
        <div>
          {data &&
            data.map((user) => (
              <React.Fragment>
                <div key={user.userId}>{user.userId}</div>
                <div key={user.title}>{user.title}</div>
                <div key={user.completed}>user.completed</div>
              </React.Fragment>
            ))}
        </div>
      </li>
    </ul>
  );
};

export default Body;
