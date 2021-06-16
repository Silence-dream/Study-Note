import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("数据变化了");
  });
  return (
    <div>
      <h1>useEffect</h1>
      <div></div>
    </div>
  );
};

export default UseEffect;
