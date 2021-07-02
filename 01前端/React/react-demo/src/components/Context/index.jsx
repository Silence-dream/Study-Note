import React, { Component } from "react";

let { Provider, Consumer } = React.createContext();

export default class ContextFatherToSon extends Component {
  render() {
    return (
      <div style={{ background: "pink", width: "500px", height: "500px" }}>
        <Provider value="Provider上面的值">
          <h1>React context</h1>
          <Consumer>
            {
              /* 渲染 Provider 上 value 的值 */
              (data) => {
                return <span>{data}</span>;
              }
            }
          </Consumer>
        </Provider>
      </div>
    );
  }
}
