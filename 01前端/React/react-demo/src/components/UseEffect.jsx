import React, { useState, useEffect } from "react";

export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [flag, setFlag] = useState(true);
  const [countFlag, setCountFlag] = useState(false);
  useEffect(() => {
    if (countFlag) {
      console.log(1);
    }
  }, [count]);
  const add = () => {
    setCount(count + 1);
    setCountFlag(true);
  };

  return (
    <div>
      <h1>useEffect</h1>
      <div>{count}</div>
      <button onClick={() => add()}>点击累加</button>
      <button onClick={() => setFlag(!flag)}>显示/隐藏</button>
      {flag && <Son></Son>}
    </div>
  );
}

function Son() {
  useEffect(() => {
    return () => {
      console.log("useEffect.jsx 组件卸载了");
    };
  }, []);
  return (
    <div>
      <h1>子组件</h1>
    </div>
  );
}
