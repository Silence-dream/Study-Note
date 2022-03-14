import React from "react"

class Mouse extends React.Component {
  // 需求: 完成图片跟着鼠标走
  // 需求: 完成坐标显示

  state = {
    x: 0,
    y: 0
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.fn)
  }

  fn = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    // 写法一
    return this.props.wdnmd(this.state)
    // 写法二
    // return this.props.children(this.state)
  }
}


export default Mouse