import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
// 文档 https://reactrouter.com/web
function App() {
  console.log(1);
  return (
    <div className="App">
      {/* 使用路由 */}
      {/* BrowserRouter 在url上没有 # 号  HashRouter 则相反,如需体验自行修改组件*/}
      <BrowserRouter>
        {/* 去哪一个路由地址 */}
        <Link to="/">首页</Link>
        {/* https://reactrouter.com/web/api/Link */}
        <Link to="/about">About</Link>
        <Link to="/about/abc">About abc </Link>
        <Link to="/about/bcd">About bcd </Link>
        <Link to="/home">home</Link>
        {/* https://reactrouter.com/web/api/NavLink */}
        <NavLink to="/asdae">去访问 404</NavLink>
        {/* 匹配路由地址 */}
        <Switch>
          {/* 开启 精确匹配不然访问 /about/abc会显示 About 组件 */}
          <Route exact path="/about">
            {/* 渲染组件 */}
            <About></About>
          </Route>
          <Route path="/about/abc">
            <div>about abc</div>
          </Route>
          <Route path="/about/bcd">
            <div>about bcd</div>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* 在 Switch 中 上面的都匹配不到就显示首页 */}
          <Route exact path="/">
            <div>这里是首页</div>
          </Route>
          {/* 开启 404页面 */}
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
