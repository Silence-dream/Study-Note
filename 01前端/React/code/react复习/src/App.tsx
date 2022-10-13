import ClassProps from "./components/ClassProps"
import FunctionProps from "./components/FunctionProps"
import ClassChildren from "./components/ClassChildren"
import FunctionChildren from "./components/FunctionChildren"
import HooksLearn from "./components/HooksLearn";
import React, {useState} from "react";
import "./App.css";
import GetContext from "./components/GetContext";
import {Context} from "./utils/Context"
import {Demo1, Demo2} from "./components/Demo";
import FormShouKong from "./components/FormShouKong";
import FormFeiShouKong from "./components/FormFeiShouKong";
import PotalM from "./components/PotalM";
import Reducer from "./components/Reducer";
import LayoutEffect from "./components/LayoutEffect";
import UseRef from "./components/UseRef";
import Memo from "./components/Memo";
import UseMemoUse from "./components/UseMemo";
import RChildren from "./components/RChildren";
import ReduxStore from "./components/ReduxStore";
import UseCallBack from "./components/UseCallBack";
import UseImperativeHandle from "./components/UseImperativeHandle";
import ReduxActionCreator from "./components/ReduxActionCreator";
import CombineReducers from "./components/CombineReducers";

function App () {
  const [person, setPerson] = useState ({
    name: "张三",
    age: 18
  })
  const value = "My Context Value";
  console.log ("父组件渲染")
  return (
    <div className="App">
      <ClassProps/>
      <FunctionProps person={person} setPerson={setPerson}/>
      <ClassChildren>
        <div>
          <p>我是子组件</p>
        </div>
      </ClassChildren>
      <FunctionChildren>
        <div>
          <p>我是子组件</p>
        </div>
      </FunctionChildren>
      <HooksLearn/>
      <Context.Provider value={value}>
        <GetContext/>
      </Context.Provider>
      <Context.Consumer>
        {value => {
          return <>
            <h1>Consumer</h1>
            <div>{value}</div>
          </>
        }}
      </Context.Consumer>
      <Demo1/>
      <Demo2/>
      <FormShouKong></FormShouKong>
      <FormFeiShouKong></FormFeiShouKong>
      <Reducer/>
      <LayoutEffect/>
      <UseRef/>
      <Memo/>
      <UseMemoUse/>
      <UseCallBack/>
      <RChildren>
        <h1>传入的</h1>
        传入的
      </RChildren>
      <ReduxStore/>
      <ReduxActionCreator/>
      <UseImperativeHandle/>
      <CombineReducers/>
      {/*  传送门 */}
      <PotalM/>
    </div>
  )
}

export default App
