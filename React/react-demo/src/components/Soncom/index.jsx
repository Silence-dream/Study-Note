import React from "react";
import "./index.css";
export class Soncom extends React.Component {
  // 设置 class 子组件的参数的默认值
  static defaultProps = {
    age: 90,
  };
  Sonfn = () => {
    this.props.Fatherfn("son子里面的" + this.props.age);
  };
  render() {
    return (
      <div className="son">
        <h1>子组件</h1>
        <div>class 子组件传参</div>
        <span>
          传递的参数-----{this.props.cname}年龄{this.props.age}
        </span>
        <button onClick={this.Sonfn}>子父传参</button>
      </div>
    );
  }
}

export const Soncom2 = (props) => {
  const fn = () => {
    console.dir(Soncom2);
  };

  return (
    <div className="son2">
      <h1>子组件</h1>
      <div>function 子组件传参</div>
      <span>
        传递的参数----{props.cname}年龄{props.age}
      </span>
      <button onClick={fn}>测试</button>
    </div>
  );
};
// 设置 function 子组件的参数的默认值
Soncom2.defaultProps = {
  age: 10,
};
// export default Soncom
