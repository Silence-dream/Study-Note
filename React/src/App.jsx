import React from "react"

class AppSon extends React.Component {

  componentDidUpdate() {
    console.log("3.2.AppSon组件更新--componentDidUpdate 发送网络请求 操作DOM")
  }
  componentWillUnmount() {
    console.log("4.1 组件卸载--componentWillUnmount 清理数据 停定时器 解绑事件 ")

    // window.addEventListener(); 绑定事件
    // window.removeEventListener()；解绑事件
  }

  render() {
    console.log("AppSon组件更新")
    return (
      <div>我是子组件---{this.props.count}</div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      flag: true
    }
    console.log("1.1.组件挂载--construcotr 初始化state ")
  }

  componentDidMount() {
    console.log("1.3.组件挂载--componentDidMount 发送网络请求 操作DOM")
  }

  componentDidUpdate() {
    console.log("2.2.组件更新--componentDidUpdate 发送网络请求 操作DOM")

    if (this.state.count <= 1) {
      this.setState({
        count: 2
      })
    }
  }

  componentWillUnmount() {
    console.log("4.1 组件卸载--componentWillUnmount 清理数据 停定时器 解绑事件 ")

    // window.addEventListener(); 绑定事件
    // window.removeEventListener()；解绑事件
  }


  handlerClick = () => {
    this.setState({
      count: 1,
      flag: false
    })



    // this.forceUpdate();
  }


  render() {
    // 不能在render中调用setState
    if (this.state.count === 0) {
      console.log("1.2.组件挂载--render 渲染UI")
    } else {
      console.log("2.1.组件更新--render 更新UI")
    }
    console.log("2345u099435u43")
    // this.setState({
    //   count: 1
    // })
    return (
      <div>
        <div>我是App组件</div>
        <button onClick={this.handlerClick}>点击我更新Count的值</button>
        {this.state.flag && <AppSon count={this.state.count} />}
      </div>

    )
  }
}

export default App