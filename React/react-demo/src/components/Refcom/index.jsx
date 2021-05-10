import React from "react";

class Refcom extends React.Component {
  constructor() {
    super();
    // 通过 React.createRef 创建 ref 对象
    this.txt = React.createRef();
  }

  fn = () => {
    // 输出 ref 对象
    console.log(this.txt);
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ background: "pink", marginBottom: "20px" }}>
          <h1>ref 获取 node</h1>
          <input
            type="text"
            /* 绑定 ref  */
            ref={this.txt}
            /* 点击输出 ref 对象 */
            onClick={this.fn}
            placeholder="点击我"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Refcom;
