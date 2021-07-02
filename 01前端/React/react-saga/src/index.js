import React from "react";
import ReactDOM from "react-dom";
import App from './App';

// 引入store
import store from "./store/store";
// 使用Provider组件 提供数据
import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root'));


  // 需求: 1.在store中创建一个数据 secret: 显示到页面上
  //       2.点击按钮 请求数据 重新显示