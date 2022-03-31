import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTodo} from "../store/actions/index.js";

export default function TContext() {
  let todoArray = useSelector((state) => state.todos);
  const dispatch = useDispatch()

  // console.log(todoArray);
  function fn(id) {
    dispatch(updateTodo(id));
  }

  return (<>
    <ul>
      {todoArray.map((item) => {
        return <li key={item.id} className={item.isActive ? "red" : ""}
                   onClick={() => fn(item.id)}>{item.text}</li>;
      })}
    </ul>
  </>);
}
