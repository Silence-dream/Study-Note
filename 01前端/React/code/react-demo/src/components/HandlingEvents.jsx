import React, { Component } from "react";

export default class HandlingEvents extends Component {
  state = {
    msg: "1",
  };
  test = (e) => {
    e.preventDefault();
    console.log(e);
  };
  render() {
    return (
      <div>
        <h1>事件处理</h1>
        <a href="//www.baidu.com" onClick={(e) => this.test(e)}>
          阻止默认行为
        </a>
        <button onClick={(e) => this.test(e)}>箭头函数点击</button>
        <button onClick={this.test}>普通调用函数点击</button>
        <button onClick={this.test.bind(this)}>bind点击</button>
      </div>
    );
  }
}
