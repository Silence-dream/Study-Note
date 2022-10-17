import { useEffect, useRef, useState } from "react";

export  default function UseRef() {
  const [text, setText] = useState("");
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <>
      <h1>UseRef</h1>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      {renderCount.current}
    </>
  );
}
