import React, {useRef, useState} from 'react';

const FormFeiShouKong = () => {

  const nameRef = useRef<HTMLInputElement> (null);
  const textRef = useRef<HTMLTextAreaElement> (null);
  return (
    <div>
      <h1>非受控表单</h1>
      <label htmlFor="name">姓名</label>
      <input type="text" id="name" ref={nameRef}/>
      <button onClick={() => {
        console.log (nameRef.current?.value)
      }}>输出name的值
      </button>
      <br/>
      <textarea name="text" id="text" cols={30} rows={10} ref={textRef}>
      </textarea>
      <button onClick={()=>{
        console.log(textRef.current!.value)
      }}>点击输出</button>
    </div>
  );
};

export default FormFeiShouKong;
