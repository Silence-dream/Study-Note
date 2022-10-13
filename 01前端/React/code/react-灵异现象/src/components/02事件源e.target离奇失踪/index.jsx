import React from "react";

export default class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handerChange(e) {
    console.log(e.target.value);
    setTimeout(() => {
      this.setState({
        value: e.target.value,
      });
    }, 0);
  }
  render() {
    return (
      <div>
        <h1>02事件源e.target离奇失踪</h1>
        <input
          placeholder="请输入用户名？"
          onChange={this.handerChange.bind(this)}
        />
      </div>
    );
  }
}
