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
      {/*  传送门 */}
      <PotalM/>
    </div>
  )
}

export default App
