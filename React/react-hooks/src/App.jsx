import { useState, useEffect } from "react";
import "./App.css";
import UseEffect from "./components/UseEffect";

function App() {
  //  [state, setState]
  let [count, fn] = useState(0);
  function add(e) {
    //#region
    // fn(count + 1);
    // console.log(1);
    // fn(count + 1);
    // console.log(2);
    // fn(count + 1);
    // console.log(3);
    //#endregion

    fn((prevState) => prevState + 1);
    fn((prevState) => prevState + 1);
    fn((prevState) => prevState + 1);
  }
  useEffect(() => {
    console.log("数据初始化");
    console.log("数据变化了");
    return () => {
      console.log("组件卸载了");
    };
  }, [count]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="useState">
          <h1>{count} </h1>
          <button onClick={() => fn(count + 1)}>点击增加</button>
          <button onClick={(e) => add(e)}>setState是异步的</button>
        </div>
        <div className="useEffect"></div>
      </header>
    </div>
  );
}

export default App;
