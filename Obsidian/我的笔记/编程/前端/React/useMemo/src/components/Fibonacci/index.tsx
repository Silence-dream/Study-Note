import React, { useMemo, useState } from "react";

function Fibonacci({ n }: any) {
  const [result, setResult] = useState(0);

  const expensiveFunction = useMemo(() => {
    // 这里是一个昂贵的计算函数
    return 10 * 2;
  }, [10]);

  // 通过点击按钮来调用 expensiveFunction 函数并更新状态
  const handleClick = () => {
    setResult(expensiveFunction);
  };

  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={handleClick}>Calculate</button>
    </div>
  );
}

export default Fibonacci;
