import React, {Children} from 'react';

function RChildren (props: { children: React.ReactNode }) {
  // 限制只传入一个元素
  // try {
  //   Children.only (props.children);
  // } catch (e) {
  //   return <div>
  //     <h1>RChildren only count map toArray</h1>
  //     请传入一个子元素
  //   </div>;
  // }

  // Children.map 遍历每一个元素
  function nestATable(){
    // Children.map 如果遇到值传入了一个元素，则会报错,使用toArray方法来保证永远有用
    // Children.toArray(props.children)
    return Children.map(props.children,(item  )=>{
      return <a href="#">{item}</a>
    })
  }
  return (
    <div>
      <h1>RChildren only count map toArray</h1>
      {props.children}
      <h1>传入了{Children.count (props.children)}个子元素</h1>
      {/*嵌套个a标签*/}
      {nestATable()}
    </div>
  );
}

export default RChildren;
