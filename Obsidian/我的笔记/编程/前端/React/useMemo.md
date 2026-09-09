---
tags : 
- React
---


数据缓存机制，避免在每次渲染时都进行高开销的计算。


```jsx
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
```


[Hook API 索引 – React](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)

<!-- 知识导航：主题归属与经过整理的关联文章。 -->
## 知识导航

所属主题：[[00-知识导航/05-React与组件设计|React与组件设计]]

相关笔记：

- [[编程/前端/React/如何更新组件状态|如何更新组件状态]] — 状态变化与重复计算
