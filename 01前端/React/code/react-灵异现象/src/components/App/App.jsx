import React from "react";
import "./App.css";
import GuaZai from "../01莫名其妙的重复挂载/index";
import Event from "../02事件源e.target离奇失踪/index";
import ShiXiao from "../04PureComponet.memo功能失效问题";
import UseState from "../05useState更新相同的State,函数组件执行2次";
function App() {
  return (
    <React.Fragment>
      <GuaZai></GuaZai>
      <Event></Event>
      <ShiXiao></ShiXiao>
      <UseState></UseState>
    </React.Fragment>
  );
}

export default App;
