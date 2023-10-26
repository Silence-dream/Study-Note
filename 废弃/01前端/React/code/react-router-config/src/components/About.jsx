import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default function About(props) {
  return (
    <div>
      <h1>about 路由</h1>
      <Link to="/about/abc">去 about </Link>
      {renderRoutes(props.route.routes)}
      {console.log(props)}
    </div>
  );
}
export function Abc() {
  return <div>abc 路由</div>;
}