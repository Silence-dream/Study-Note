import React from "react";

interface FunctionProps {
  person?: {
    name: string;
    age: number;
  };
  setPerson: React.Dispatch<React.SetStateAction<{ name: string, age: number }>>
}

// 设置默认值
FunctionProps.defaultProps = {
  person:{
    name: '默认值',
    age: 0
  }
};

function FunctionProps (props: FunctionProps) {
  function fn () {
    props.setPerson ({
      name: '派蒙',
      age: 180,
    });
  }

  return (
    <div>
      <h1>Function Props</h1>
      <p>{props.person!.name}</p>
      <p>{props.person?.age}</p>
      <button onClick={fn}>点击修改传递参数</button>
    </div>
  );
}

export default FunctionProps;
