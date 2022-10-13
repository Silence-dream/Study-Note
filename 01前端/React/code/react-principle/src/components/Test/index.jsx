import React from "react";
import WidthMouse from "../Mouse/index";

// 创建一个组件(函数组件)
const Position = (props) => {
  return (
    <div>
      <p>
        {props.x}--{props.y}
      </p>
    </div>
  );
};
/* 包装一下 */
let a = WidthMouse(Position);

export default a;
