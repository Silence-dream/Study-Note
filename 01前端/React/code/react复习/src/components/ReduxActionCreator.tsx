import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ReduxActionCreator () {
  // let [count,setCount] = useState(0);
  let count: any = useSelector (state => state.counter.count);
  const dispatch = useDispatch ();

  // 简化一
  function fn (payload: number) {
    dispatch ({type: "addAction", payload});
  }

  // 简化二

  function increment (payload: number) {
    // 像这样返回了 action 对象的叫做 action creator 函数
    return {
      type: "addAction",
      payload
    }
  }

  return (
    <>
      <h1>ReduxActionCreatetor</h1>
      <div>{count}</div>
      <button onClick={() => fn (5)}>+5</button>
      <button onClick={() => fn (10)}>+10</button>
      <br/>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(increment(10))}>+10</button>
    </>
  );
}
