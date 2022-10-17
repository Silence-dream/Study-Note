import React, { forwardRef, useRef } from "react";
const ForwardRef = () => {
  return (
    <div>
      <h1>ForwardRef</h1>
      <Father></Father>
    </div>
  );
};
const Father = () => {
  let inputRef = useRef();
  const changeInputValue = () => {
    inputRef.current.value = "Hello";
  };
  return (
    <div>
      <button onClick={changeInputValue}>我是 Father </button>
      <Son ref={inputRef}></Son>
    </div>
  );
};
const Son = forwardRef((props, ref) => {
  // let inputRef = useRef();
  const changeInputValue = () => {
    ref.current.value = "Hello";
  };
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={changeInputValue}>我是 Son </button>
    </div>
  );
});

export default ForwardRef;
