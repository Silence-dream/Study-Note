import {useRef, forwardRef, useImperativeHandle, useState} from "react";

let Message= forwardRef((props:any, ref:any) =>{
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => {
    return {
      getText() {
        return text;
      },
      input: inputRef.current,
    };
  });
  return (
    <input
      ref={inputRef}
      type="text"
      value={text}
      onChange={(event) => setText(event.target.value)}
    />
  );
});
export default function UseImperativeHandle () {
  const messageRef = useRef<any> (null);
  const onClickHandler = () => {
    console.log (messageRef.current.getText ());
    console.log (messageRef.current.input);
  };
  return (
    <>
      <h1>UseImperativeHandle</h1>
      <Message ref={messageRef}></Message>
      <button onClick={onClickHandler}>button</button>
    </>
  );
}
