import { useState } from "react";
import React from 'react';
import "./App.css"
import Index from './components/Index'
import IndexTwo from './components/IndexTwo'
const TextComponent = ()=> <div> hello , i am function component </div> 
function App() {
  const [count, setCount] = useState(0);
  const [list] = useState([1, 2, 3, 4, 5]);
  // console.log(React.createElement("div", {className:"test"}, "hello world"));
  return (
    <div className="App">
      {/* element */}
      <div>Hello,world</div>
      {/* fragment */}
      <React.Fragment>
        <div>fragment</div>
      </React.Fragment>
      {/* 文本 */}
      这里是一段文字
      {/* 数组 */}
      {list.map(item=><h1 key={item}>{item}</h1>)}
      {/* 组件 */}
      <TextComponent></TextComponent>
      {/* 三元 */}
      {count > 0 ? <div>{count}</div> : <div>count的值为0</div>}
      {/* 函数 */}
      <button type="submit" onClick={()=>setCount(count+1)}>count</button>
      <Index></Index>
      <IndexTwo></IndexTwo>
    </div>
  );
}

export default App;
