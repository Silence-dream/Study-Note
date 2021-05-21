import { BrowserRouter, NavLink, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Child from "./components/Child";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/about/99899">about</NavLink>
        <NavLink
          to={{
            pathname: "/home",
            // 拼接在 home 后面的 url 参数
            search: "?flag=true",
            state: {
              name: "刘德华",
              age: 18,
            },
          }}
        >
          home
        </NavLink>

        <NavLink to="/child">子路由</NavLink>
        {/* 要想在 this.props 里面接收到传递的值那么组件就必须写在 component 里面 */}
        <Route path="/about/:id" component={About}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/child" component={Child}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
