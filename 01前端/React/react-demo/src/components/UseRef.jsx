import React, { useRef } from "react";

export default function UseRec() {
  const h1Ref = useRef();
  const test = () => {
    console.dir(h1Ref.current);
    h1Ref.current.innerText = "useRef 被修改了";
  };
  return (
    <div>
      <h1 ref={h1Ref}>useRef</h1>
      <button onClick={test}>获取 h1</button>
    </div>
  );
}
