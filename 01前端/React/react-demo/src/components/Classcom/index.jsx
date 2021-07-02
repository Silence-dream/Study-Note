import React from "react";

class ClassCom extends React.Component {
  state = {
    count: 0,
  };

  handleClick = (msg) => {
    // 事件传参
    console.log(msg);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state);
  };

  fn(e){
    e.stopPropagation()
    // console.log(e)
    console.log(e)
  }

  render() {
    return (
       <div>
         <h1 onClick={this.handleClick.bind(this, "123")} style={{background: "skyblue"}}>
           类组件{this.state.count}
           <button onClick={this.fn.bind(this)}>事件不绑定this</button>
         </h1>
       </div>
    );
  }

}

export default ClassCom;
