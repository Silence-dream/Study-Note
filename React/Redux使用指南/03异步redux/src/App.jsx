import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncAction } from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.msg}</h1>
        <button onClick={this.props.msgUpdate}>点击修改值</button>
        <h1>{this.props.async}</h1>
        <button onClick={this.props.msgAsync}>异步修改值使用 thunk</button>
        <button onClick={this.props.msgAsync2}>异步修改值不使用 thunk</button>
        <button onClick={this.props.msgAsync3}>异步修改值使用 promise</button>
      </div>
    );
  }
}

let mapState = (state) => {
  return {
    msg: state.msg,
    async: state.async,
  };
};
let mapDispatch = (dispatch) => {
  return {
    msgUpdate() {
      dispatch({
        type: "MSG",
        msg: "你好",
      });
    },
    msgAsync() {
      dispatch(asyncAction);
    },
    msgAsync2() {
      fetch("http://localhost:8000/hello")
        .then((res) => res.json())
        .then((res) => {
          dispatch({
            type: "ASYNC",
            async: res.msg,
          });
        });
    },
  };
};

export default connect(mapState, mapDispatch)(App);
