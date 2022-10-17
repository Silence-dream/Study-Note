import React, { useContext } from "react";
// 1
const MsgContext = React.createContext("你好");
export default function UseContext() {
  return (
    <div>
      <h1>useContext</h1>
      {/* 2 */}
      <MsgContext.Provider value={"你好"}>
        <Son></Son>
      </MsgContext.Provider>
    </div>
  );
}

function Son() {
  // 3
  const context = useContext(MsgContext);
  return (
    <div>
      <h1>子组件</h1>
      {/* 4 */}
      <span>{context}</span>
    </div>
  );
}
