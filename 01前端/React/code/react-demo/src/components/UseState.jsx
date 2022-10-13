import React, { useState } from "react";

function UseState() {
  //  [state, setState]
  // 创建一个名为 count 的 state 并且设置初始化的值为 0,通过 setCount(值) 来修改 count 的值
  let [count, setCount] = useState(0);

  return (
    <div className="use-state" style={{ border: "1px solid pink" }}>
      <h1>React Hooks</h1>
      <h1>这里是 UseState 组件</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>点击累加</button>
    </div>
  );
}

export default UseState;
