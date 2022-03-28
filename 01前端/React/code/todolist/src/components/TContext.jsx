import React from "react";
import { useSelector } from "react-redux";

export default function TContext() {
  let todoArray = useSelector((state) => state.todos);
  console.log(todoArray);
  return (
    <>
      <ul>
        {todoArray.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </>
  );
}
