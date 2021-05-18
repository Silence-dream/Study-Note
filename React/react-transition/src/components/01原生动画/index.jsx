import React from "react";
import styled from "styled-components";
// 创建一个 div组件里面的样式是
const Div = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: green;
  opacity: ${(props) => props.opacity};
  transition: all 3s;
`;
class App extends React.Component {
  // div的初始状态
  state = {
    width: "0px",
    height: "0px",
    opacity: 0,
  };

  // div的改变后的状态
  btnClick = () => {
    this.setState({
      width: "60px",
      height: "60px",
      opacity: 1,
    });
  };

  render() {
    return (
      <div className="one">
        <Div {...this.state}></Div>
        <button onClick={this.btnClick}>按钮</button>
      </div>
    );
  }
}

export default App;
