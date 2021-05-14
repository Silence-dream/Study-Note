function Fncom(props) {
  let count=0;
  function handleClick() {
    count++
    console.log(count);
    // 我们发现在控制台中 count 的值发生了改变但是页面上的数据没有跟着改变,换句话说就是没有响应式
    // 移步 Class 组件查看解决办法
  }

  return <h1 onClick={handleClick} style={{background:"pink"}}>
    函数组件{count}---{props.name}
  </h1>;
}

export default Fncom;
