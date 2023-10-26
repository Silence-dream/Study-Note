import React, { useState, useEffect } from "react";
import stroe from "../store";

export default function Redux() {
  const add = () => {
    stroe.dispatch({
      type: "ADD",
    });
  };

  let [count, setCount] = useState(stroe.getState().conut);
  useEffect(() => {
    stroe.subscribe(() => {
      setCount(stroe.getState().conut);
    });
  }, []);
  return (
    <div>
      <h1>Redux</h1>
      <span>{count}</span>
      <button onClick={add}>点击</button>
    </div>
  );
}
