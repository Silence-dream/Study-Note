import React from "react";

class ClassCom extends React.Component {
  state = {
    count: 0,
  };

  handleClick = (msg) => {
    // 事件传参
    console.log(msg);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state);
  };

  render() {
    return (
      <h1 onClick={this.handleClick.bind(this,"123")} style={{ background: "skyblue" }}>
        类组件{this.state.count}
      </h1>
    );
  }

}

export default ClassCom;
