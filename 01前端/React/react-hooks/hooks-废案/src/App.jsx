import "./App.css";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";
import { useState } from "react";

function App() {
  let [flag, setFlag] = useState(true);
  return (
    <div className="app App-header">
      <button onClick={() => setFlag(!flag)}>显示与隐藏 UseEffect 组件</button>
      <UseState></UseState>
      {flag ? <UseEffect /> : false}
      <UseContext></UseContext>
    </div>
  );
}

export default App;
