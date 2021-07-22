import React, { Component } from "react";

export default class State extends Component {
  state = {
    msg: "你好",
  };
  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        <button
          onClick={() =>
            // 状态是自己内部的,改变状态唯一的方式就是`setState`
            this.setState({
              msg: "我被更新了",
            })
          }
        >
          点我更新数据
        </button>
      </div>
    );
  }
}
