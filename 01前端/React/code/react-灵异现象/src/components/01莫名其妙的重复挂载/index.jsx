import React, { Component } from "react";
/* 
造成这种情况的本质，是每一次 render 过程中，都形成一个新组件，对于新组件，React 处理逻辑是直接卸载老组件，重新挂载新组件，所以我们开发的过程中，注意一个问题那就是：
对于函数组件，不要在其函数执行上下文中声明新组件并渲染，这样每次函数更新会促使组件重复挂载。
对于类组件，不要在 render 函数中，做如上同样的操作，否则也会使子组件重复挂载。
 */
export default class index extends Component {
  state = {
    count: 0,
  };
  fn = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    //#region 这一段直接写在 return 里面就不会每一次创建新组件了
    let NewIndex = () => {
      return (
        <div>
          <Son count={this.state.count}></Son>
          <button onClick={this.fn}>增加</button>
        </div>
      );
    };
    //#endregion
    return (
      <div>
        <h1>01莫名其妙的重复挂载</h1>
        <NewIndex></NewIndex>
      </div>
    );
  }
}

class Son extends Component {
  componentDidMount() {
    console.log("组件渲染");
  }
  componentDidUpdate() {
    console.log("组件数据更新");
  }
  render() {
    return (
      <div>
        <h1>01 son</h1>
        <p>累加{this.props.count}</p>
      </div>
    );
  }
}
