import React, { Component } from "react";

export default class liftCycle extends Component {
  constructor() {
    super();
    console.log("1.组件挂载");
    this.state = {
      msg: "helloWorld",
    };
  }
  componentDidMount() {
    // 方法会在组件已经被渲染到 DOM 中后运行
    console.log("3.组件挂载--componentDidMount 发送网络请求 操作 DOM");
  }
  componentDidUpdate() {
    console.log("2.2.组件更新--componentDidUpdate 发送网络请求 操作DOM");
  }
  render() {
    console.log("2.组件渲染");
    return (
      <div
        id="left-cycle"
        style={{ background: "skyblue", width: "500px", height: "500px" }}
      >
        <h1>生命周期</h1>
        <span>{this.state.msg}</span>
      </div>
    );
  }
}
