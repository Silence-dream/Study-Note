import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const addAsync = () => {
    setCount(count + 1);
    // 异步更新 state
    console.log("异步更新", count);
  };
  const addAwait = () => {
    // 如果我们需要获取 state 更新之后的值就需要使用回调函数
    setCount((count) => {
      count++;
      console.log("同步更新", count);
      return count;
    });
  };
  // 每一次的数据更新都会刷新整个组件
  console.log("每一次的数据更新都会刷新整个组件", count);

  return (
    <div className="list">
      <h1>use State</h1>
      <h1>{count}</h1>
      <button onClick={addAsync}>异步更新点击</button>
      <button onClick={addAwait}>同步更新点击</button>
    </div>
  );
}

export default UseState;
