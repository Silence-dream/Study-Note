import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
export default class Child extends Component {
  render() {
    console.log(this.props.match);
    // path 让我们构建 router 路径相对于父路由
    // url 让我们建立相对的联系
    let { url, path } = this.props.match;
    return (
      <div>
        <h1>子路由</h1>
        <Link to={url + "/son"}>去 child son</Link>
        <Switch>
          <Route exact path={path}>
            <h3>子路由显示</h3>
          </Route>
          <Route exact path={path + "/son"}>
            <Son></Son>
          </Route>
        </Switch>
      </div>
    );
  }
}

class Son extends Component {
  render() {
    return <h1>我是/child/son</h1>;
  }
}
