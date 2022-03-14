import { useState, useEffect } from "react";

const UseEffect = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    // componentDidMont
    console.log("数据渲染了");
    // componentDidUpdate
    console.log("数据更新了");
    // componentWillUmount
    return () => {
      console.log("组件卸载了");
    };
  });
  // 监听 count 更新
  useEffect(() => {
    console.log("count 更新了", count);
  }, [count]);

  return (
    <div className="use-state" style={{ border: "1px solid pink" }}>
      <h1>这里是 UseEffect 组件</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>点击累加</button>
    </div>
  );
};

export default UseEffect;
