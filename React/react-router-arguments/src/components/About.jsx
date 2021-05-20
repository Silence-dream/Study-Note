import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    let { id } = this.props.match.params;
    return (
      <div>
        <h1>about</h1>
        <span>传入的 id 是 {id}</span>
      </div>
    );
  }
}
