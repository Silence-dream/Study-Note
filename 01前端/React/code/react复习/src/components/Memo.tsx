// src/App.js
import { useEffect, useState,memo } from "react";

function ShowName({ name }:any) {
  useEffect(() => {
    console.log("ShowName rendered");
  });
  return <div>{name}</div>;
}
// memo 方法内部采用的是浅层比较，比较基本数据类型的值是否相同，比较引用类型是否为相同的引用地址。
// memo 方法的第二个参数即为比较函数，可以通过它解决以上问题。比较函数的第一个参数为 prevProps，比较函数的第二个参数为 nextProps, 比较函数返回 true 不进行渲染，比较函数返回 false 组件重新渲染。
function compare(prev:any,cur:any){
  return prev.obj.sex === cur.obj.sex;
}

const MemoShowName = memo(ShowName,compare);


function Memo() {
  const [index, setIndex] = useState(0);
  const [name] = useState("张三");
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <h1>Memo</h1>
      <p>{index}</p>
      <MemoShowName name={name} obj={{sex:"男"}}/>
    </>
  );
}


export default Memo;
