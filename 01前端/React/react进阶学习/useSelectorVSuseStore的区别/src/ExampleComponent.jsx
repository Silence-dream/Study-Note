import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

export function ExampleComponent() {
  const { check1, counter } = useSelector(state => ({
    check1: state.reducer1.check1,
    counter: state.reducer2.counter
  }));
  const store = useStore();
  const dispatch = useDispatch();
  return (
    <div>
      <div>Check1: {check1.toString()}</div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        Counter: {counter}
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
      <button onClick={() => dispatch({ type: "CHECK1" })}>CHeck1</button>
    </div>
  );
}
