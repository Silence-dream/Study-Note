import React, { forwardRef, useRef } from "react";

export default function Demo() {
  const ref = useRef();
  const test = () => {
    console.log(ref);
  };

  return (
    <div>
      <h1>demo</h1>
      <Son ref={ref}></Son>
      <button onClick={test}>点击获取子组件 ref</button>
    </div>
  );
}

const Son = forwardRef((props, ref) => {
  return (
    <div>
      <h1 ref={ref}>son</h1>
    </div>
  );
});
