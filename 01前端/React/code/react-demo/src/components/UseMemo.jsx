import React, { useMemo, useState } from "react";

export default function UseMemo() {
  let [count, setCount] = useState(0);
  let [value, setValue] = useState(100);

  // useMemo 使用条件, 当一个值变化的时候影响到了另一个值的时候
  // 不想让 另一个值被重复执行就可以使用 useMemo 来优化性能
  const treatCount = useMemo(() => {
    console.log("treatCount");
    return count + 10;
  },[count]);

  // const treatCount = () => {
  //   console.log("treatCount");
  //   return count + 10;
  // };
  return (
    <div>
      <h1>UseMemo</h1>
      <p>当前count:{count}</p>
      <p>当前value:{treatCount}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
      <input
        type="text"
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
