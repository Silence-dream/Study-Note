import { useState } from "react";
import "./App.css";
import UseEffect from "./components/UseEffect";

function App() {
  //  [state, setState]
  let [count, fn] = useState(0);
  function add(e) {
    // fn(count + 1);
    // console.log(1);
    // fn(count + 1);
    // console.log(2);
    // fn(count + 1);
    // console.log(3);

    fn((prevState) => prevState + 1);
    fn((prevState) => prevState + 1);
    fn((prevState) => prevState + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="useState">
          <h1>{count} </h1>
          <button onClick={() => fn(count + 1)}>点击增加</button>
          <button onClick={(e) => add(e)}>setState是异步的</button>
        </div>
        <div className="useEffect">
          <UseEffect></UseEffect>
        </div>
      </header>
    </div>
  );
}

export default App;
