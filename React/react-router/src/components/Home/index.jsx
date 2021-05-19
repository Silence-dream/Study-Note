import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Link to="/home/abc">abc</Link>
        <Route path="/home/abc">
          <Fn></Fn>
        </Route>
      </div>
    );
  }
}

function Fn() {
  return <div>home fn</div>;
}

export default Home;
