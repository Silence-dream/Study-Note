import {useEffect, useState} from "react";

function HooksLearn (){
  // hooks 的变量更改会引发组件重新渲染
  const [count,setCount] = useState(0);
  let a=10;
  function add(){
    // 普通变量被更改后不会触发视图更新
    a++;
    // setCount(count+1);
  }
  console.log("HooksLearn函数被渲染了")
  // 如果想变量在更改的时候再执行可以使用 useEffect
  useEffect(()=>{
    console.log(count)
  },[count]);
  return <>
    <h1>Hooks Learn</h1>
    <p>
      HooksLearn
      count: {count}
    </p>
    {count>0?<h1>count大于0出现</h1>:null}
    <button onClick={()=>setCount(count+1)}>useState</button>
    <button onClick={add}>普通按钮</button>
  </>
}

export default HooksLearn;
