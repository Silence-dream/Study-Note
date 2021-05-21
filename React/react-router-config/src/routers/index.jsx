import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

// 创建路由规则
const routes = [
  {
    path: "/",
    // 开启精确匹配
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about/abc",
        component: Abc,
      },
    ],
  },
];
export default routes;

function Home() {
  return <div>首页路由</div>;
}
function About(props) {
  return (
    <div>
      <h1>about 路由</h1>
      {/* <Link to="/about/abc">去 about </Link> */}
      {renderRoutes(props.route.routes)}
      {console.log(props)}
    </div>
  );
}
function Abc() {
  return <div>abc 路由</div>;
}
