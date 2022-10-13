import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";

export default function THeader() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  // 添加待办事件
  const addTodolist = () => {
    dispatch(addTodo({ id: new Date().getTime(), text: "new todo", isActive: false }));
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodolist}>添加待办事件</button>
    </>
  );
}
