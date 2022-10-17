import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Father extends React.Component {
  state = {
    count: 0,
  };

  fn = () => {
    this.setState((newstate, newprops) => {
      // newstate.count++
      return {
        count: newstate.count + 1,
      };
    },()=>{
      console.log("setState 执行后立即执行")
    });
    console.log("我比 setState 打印得还要快呢");
  };
  render() {
    console.log("渲染", this.state.count);
    return (
      <div id="Father">
        <h1>Father</h1>
        <span>{this.state.count}</span>
        <button onClick={this.fn}>点击Father按钮 ++</button>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Father></Father>
  </React.StrictMode>,
  document.getElementById("root")
);
