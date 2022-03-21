import React from "react";
import {Context} from "../utils/Context"
function GetContext () {
  let value = React.useContext(Context);
  console.log("GetContext被渲染了");
  return <>
    <h1>GetContext</h1>
    <div>{value}</div>
  </>
}

export default GetContext;
