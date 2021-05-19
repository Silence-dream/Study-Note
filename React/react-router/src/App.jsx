import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* 使用路由 */}
      <BrowserRouter>
        {/* 去哪一个路由地址 */}
        <Link to="/">首页</Link>
        <br />
        <Link to="about">About</Link>
        <br />
        <Link to="about/abc">About abc </Link>
        <br />
        <Link to="/home">home</Link>

        {/* 匹配路由地址 */}
        <Switch>
          <Route path="/about">
            {/* 渲染组件 */}
            <About></About>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/">
            <div>这里是首页</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
