import React, { Component } from "react";

export default class ShouldComponentUpdate extends Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  // 返回 false 会阻止 组件更新
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count < 2) {
      return false;
    } else {
      return true;
    }
  }
  componentDidUpdate() {
    console.log("ShouldComponentUpdate.jsx 组件更新了");
  }
  render() {
    return (
      <div>
        <h1>ShouldComponentUpdate</h1>
        <div>
          <span>{this.state.count}</span>
          <button onClick={this.add}>点击更新</button>
        </div>
      </div>
    );
  }
}
