import React from "react";
class Index extends React.PureComponent {
  render() {
    console.log("组件渲染");
    const { name, type } = this.props;
    return (
      <div>
        hello , my name is {name}
        let us learn {type}
      </div>
    );
  }
}

export default function Home() {
  const [number, setNumber] = React.useState(0);
  const [type, setType] = React.useState("react");
  // const changeName = (name) => {
  //   setType(name);
  // };
  const changeName = React.useCallback((name) => {
    setType(name);
    // 用 useCallback 对 changeName 函数进行缓存，在每一次 Home 组件执行，
    // 只要useCallback 中 deps 没有变，changeName内存空间还指向原来的函数，
    // 这样 PureComponent 浅比较就会发现是相同 changeName ，从而不渲染组件
  }, []);
  return (
    <div>
      <h1>PureComponet/memo功能失效问题</h1>
      <span>{number}</span>
      <br />
      <button onClick={() => setNumber(number + 1)}>change number</button>
      <Index type={type} changeType={changeName} name="alien" />
    </div>
  );
}

// export default class Home2 extends React.Component {
//   state = {
//     number: 0,
//     type: "react",
//   };

//   setNumber = (value) => {
//     this.setState({
//       number: value,
//     });
//   };

//   changeName = () => {
//     this.setState({
//       type: "rea123ct",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>PureComponet/memo功能失效问题</h1>
//         <span>{this.state.number}</span>
//         <br />
//         <button onClick={() => this.setNumber(this.state.number + 1)}>
//           change number
//         </button>
//         <Index
//           type={this.state.type}
//           changeType={this.changeName}
//           name="alien"
//         />
//       </div>
//     );
//   }
// }
