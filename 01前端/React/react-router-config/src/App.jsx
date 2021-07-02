import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>首页</h1>
        <Link to="/">去首页</Link>
        <Link to="/about">去 about</Link>
        {/* renderRoutes(routes)会把routers作为props传入到Home组件中 */}
        {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
}

export default App;
