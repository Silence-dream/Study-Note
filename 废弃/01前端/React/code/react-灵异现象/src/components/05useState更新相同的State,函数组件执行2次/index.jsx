import React, { useState, useEffect } from "react";

const Index = ({ consoleFiber }) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log(number);
    consoleFiber(); // 每次fiber更新后，打印 fiber 检测 fiber变化
  });
  console.log("组件渲染");
  return (
    <div className="page">
      <div className="content">
        <span>{number}</span>
        <br />
        <button onClick={() => setNumber(1)}>将number设置成1</button>
        <button onClick={() => setNumber(2)}>将number设置成2</button>
        <button onClick={() => setNumber(3)}>将number设置成3</button>
        <br />
      </div>
    </div>
  );
};
export default class Home extends React.Component {
  consoleChildrenFiber() {
    console.log(this); /* 用来打印函数组件 Index 对应的fiber */
  }
  render() {
    return <Index consoleFiber={this.consoleChildrenFiber.bind(this)} />;
  }
}

//  hooks 才会出现这个问题
// class Index extends React.Component {
//   state = {
//     number: 0,
//   };
//   setNumber = (params) => {
//     this.setState({
//       number: params,
//     });
//   };

//   render() {
//     return (
//       <div className="page">
//         <div className="content">
//           <h1>05 useState 更新相同的 State,函数组件执行2次</h1>
//           <span>{this.state.number}</span>
//           <br />
//           <button onClick={() => this.setNumber(1)}>将number设置成1</button>
//           <br />
//           <button onClick={() => this.setNumber(2)}>将number设置成2</button>
//           <br />
//           <button onClick={() => this.setNumber(3)}>将number设置成3</button>
//         </div>
//       </div>
//     );
//   }
// }
