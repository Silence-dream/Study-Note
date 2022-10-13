import React, { Component } from "react";

let ContextMsg = React.createContext("你好");
export default class Context extends Component {
  render() {
    return (
      <ContextMsg.Consumer>
        {(value) => (
          <div>
            <h1>{value}</h1>
            <Son msg={value}></Son>
          </div>
        )}
      </ContextMsg.Consumer>
    );
  }
}

function Son(props) {
  return (
    <div>
      <h1>子组件</h1>
      <span>{props.msg}</span>
    </div>
  );
}
