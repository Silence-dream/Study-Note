import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
// CSSTransition有三个状态：
// + appear: 初始
//   + enter : 进入
//     + exit；: 退出
// 当组件第一次加载时候会自动查找
//   - appear / -appear - active / -appear - done
// 当组件显示时会自动查找
//   - enter / -enter - active / -enter - done
// 当组件退出时会自动查找
//   - exit / -exit - active / -exit - done
export default class index extends Component {
  state = {
    isShow: false,
  };
  fn = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div id="two">
          <CSSTransition
            in={this.state.isShow}
            classNames="box"
            timeout={3000}
            // 动画加载的时候才显示 dom 元素
            unmountOnExit
          >
            <div></div>
          </CSSTransition>
          <button onClick={this.fn}>点击显示动画</button>
        </div>
      </React.Fragment>
    );
  }
}
