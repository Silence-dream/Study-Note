import { useReducer } from "react";

function reducer(state:number, action:{type:string}) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function Reducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>useReducer</h1>
      <button onClick={() => dispatch({ type: "increment" })}>{count}</button>
      <button onClick={() => dispatch({ type: "decrement" })}>{count}</button>
    </>
  );
}

export default Reducer;
