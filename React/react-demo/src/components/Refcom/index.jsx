import React from "react";

class Refcom extends React.Component {
  constructor() {
    super();
    // 通过 React.createRef 创建 ref 对象
    this.txt = React.createRef();
    this.element = null;
  }

  fn = () => {
    // 输出 ref 对象
    console.log(this.txt);
    console.log(this.element);
    console.log(this);
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
            placeholder="点击我"
          />
          {/* 回调 ref */}
          <textarea type="text" ref={(c) => (this.element = c)} />
          <button onClick={this.fn}>点击打印 node </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Refcom;




