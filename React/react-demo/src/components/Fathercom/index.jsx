import React from "react";
import "./index.css";
import { Soncom, Soncom2 } from "../Soncom/index";
class Fathercom extends React.Component {
  state = {
    name: "刘德华",
  };

  Fatherfn(age) {
    console.log(age);
  }

  render() {
    return (
      <div className="father">
        <h1>父子传参</h1>
        {/* class 子组件 */}
        <Soncom cname={this.state.name} Fatherfn={this.Fatherfn}></Soncom>
        {/* function 子组件 */}
        <Soncom2 cname="张学友"></Soncom2>
      </div>
    );
  }
}

export default Fathercom;
