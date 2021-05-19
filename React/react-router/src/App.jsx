import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import About from "./components/About/index";
import Home from "./components/Home/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">首页</Link>
        <br />
        <Link to="about">About</Link>
        <br />
        <Link to="/home">home</Link>

        <Switch>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/">
            <div>首页</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
