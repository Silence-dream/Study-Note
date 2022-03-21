import React, {useCallback, useState} from "react";

export function Demo1 () {

  const [count1, setCount1] = useState (1);
  const [count2, setCount2] = useState (2);
  const str = "Hello, World!";
  const handleClick = useCallback (() => {
    setCount1 (c => c + 1);  // 没有重新渲染
    setCount2 (c => c + 2);  // 没有重新渲染
    // 最后react批处理
  }, []);

  return (
    <div>
      <h1>demo</h1>
      <h1>{count1}</h1>
      <h2>{count2}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export class Demo2 extends React.Component {
  componentDidMount () {
    console.log ("Demo2 componentDidMount");
  }

  componentDidUpdate (prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
    console.log ("Demo1 componentDidUpdate");
  }

  render () {
    return <>
      <h1>Demo2</h1>
    </>;
  }
}
