import React, { Component } from "react";
// 实现累加点击按钮数字加2
export default class AsyncState extends Component {
  state = {
    conut: 0,
  };
  update = () => {
    this.setState({
      conut: this.state.conut + 1,
    });
    this.setState({
      conut: this.state.conut + 1,
    });
    console.log("AsyncState.jsx   conut 的值是--", this.state.conut);
  };
  update2 = () => {
    this.setState((state) => {
      return {
        conut: state.conut + 1,
      };
    });
    this.setState((state) => {
      return {
        conut: state.conut + 1,
      };
    });
    console.log("AsyncState.jsx   conut 的值是--", this.state.conut);
  };
  render() {
    return (
      <div>
        <h1>{this.state.conut}</h1>
        <span>请看控制器</span>
        <button onClick={this.update}>点我累加</button>
        <button onClick={this.update2}>点我累加2</button>
      </div>
    );
  }
}
