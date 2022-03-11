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
      <div>
        {data &&
          data.map((user) => (
            <React.Fragment>
              <div key={user.userId}>{user.id}</div>
              <div key={user.title}>{user.title}</div>
              <div key={user.completed}>user.completed</div>
            </React.Fragment>
          ))}
      </div>
      <button
        onClick={() => {
          setPage(page + 5);
        }}
      >
        Xem tiếp
      </button>
    </React.Fragment>
  );
};

export default FetchData;
