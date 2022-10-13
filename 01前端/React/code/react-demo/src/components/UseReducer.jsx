import React, { useReducer } from "react";

function init() {
  return initialState;
}
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
}
export default function UseReducer() {
  // reducer 函数返回值  initialState 初始化值
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <h1>useReducer</h1>
      <span>{state.count}</span>
      <br />
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
    </div>
  );
}
