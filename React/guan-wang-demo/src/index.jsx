import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* 当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，需要把子组件的 state 数据提升至其共同的父组件当中保存。之后父组件可以通过 props  */
/* 小格子 */
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({
            value: "X",
          });
        }}
      >
        {/* TODO */ this.state.value}
      </button>
    );
  }
}
/* 大框 */
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}></Square>;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
