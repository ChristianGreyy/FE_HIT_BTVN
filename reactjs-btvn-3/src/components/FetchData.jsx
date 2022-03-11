import { useState, useEffect } from "react";
import React from "react";

const FetchData = () => {
  const [page, setPage] = useState(5);
  const [data, setData] = useState(null);
  useEffect(async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${page}`
    );
    setData(await response.json());
    // setData(data);
  }, [page]);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default FetchData;
