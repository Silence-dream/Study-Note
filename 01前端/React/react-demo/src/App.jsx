import React, { useRef } from "react";
import ForwardRef from "./components/ForwardRef";
import "./App.css";
import Class from "./components/Class";
import Function from "./components/Function";
import State from "./components/State";
import AsyncState from "./components/AsyncState";
import HandlingEvents from "./components/HandlingEvents";
import Context from "./components/Context";
import ShouldComponentUpdate from "./components/ShouldComponentUpdate";
import PureComponent from "./components/PureComponent";
import UseState from "./components/UseState";
import UseReducer from "./components/UseReducer";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import Redux from "./components/Redux";
import Demo from "./components/Demo";
// 实现的功能 在子组件中点击按钮选中 input ,在父组件中点击按钮选中子组件的input
function App() {
  return (
    <div className="App">
      {/* 如果直接获取 ref 会获取不到,那么就需要使用 forwarfRef 获取组件内部的 ref 了 */}
      <ForwardRef></ForwardRef>
      <Class></Class>
      <Function></Function>
      <State></State>
      <AsyncState></AsyncState>
      <HandlingEvents></HandlingEvents>
      <Context></Context>
      <ShouldComponentUpdate></ShouldComponentUpdate>
      <PureComponent></PureComponent>
      <UseState></UseState>
      <UseReducer></UseReducer>
      <UseContext></UseContext>
      <UseEffect></UseEffect>
      <UseRef></UseRef>
      <Redux></Redux>
      <Demo></Demo>
    </div>
  );
}

export default App;
