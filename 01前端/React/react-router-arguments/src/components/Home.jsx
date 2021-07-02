import React, { Component } from "react";

export default class Home extends Component {
  render() {
    console.log(this.props);
    let { name, age } = this.props.location.state;
    let { search } = this.props.location;
    let searchData = new URLSearchParams(search);
    return (
      <div>
        <h1>home</h1>
        <span>
          传过来的值是
          {name}---{age}---{searchData.toString()}
        </span>
      </div>
    );
  }
}
