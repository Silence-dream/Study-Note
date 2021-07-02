import React, {Component} from 'react';
import ReactDOM from "react-dom";
class Portal extends Component {
  render() {
    const Portal=<div>Portal</div>
    // 将标签渲染到 html 里面的指定元素内
    return ReactDOM.createPortal(Portal,document.getElementById("app"))
  }
}

export default Portal;