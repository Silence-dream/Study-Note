import React from "react";

// 引入connect 为了把数据和方法映射到组件
import { connect } from "react-redux"

// 导入 获取数据的action
import { findScrect } from "./store/action"

class App extends React.Component {
  render() {
    return (
      <main>
        <h2>{this.props.screct}</h2>
        <button onClick={this.props.getScrect}>点击获取数据</button>
      </main>
    )
  }
}

// 映射数据
const mapStateToProps = (state) => {
  return {
    // 密钥
    screct: state.screct
  }
}

// 映射方法
const mapDispatchToProps = (dispatch) => {
  return {
    getScrect() {
      // findScrect()获取密钥的方法 --> 返回值是一个对象
      dispatch(findScrect())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);