import { useLayoutEffect, useRef, useState } from "react";

function LayoutEffect() {
  const [isShow, setIsShow] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  // 此处如果使用 useEffect 就是出现元素闪烁问题
  // 就是元素先出现在原始位置, 再出现在目标位置
  // useEffect 是先渲染DOM 再执行
  // useLayoutEffect 是先执行, 再渲染DOM
  useLayoutEffect(() => {
    if (!divRef.current) return;
    divRef.current.style.top = "100px";
  }, [isShow]);
  return (
    <>
      <h1>useLayoutEffect</h1>
      <button onClick={() => setIsShow(!isShow)}>button</button>
      {isShow ? (
        <div ref={divRef} style={{ position: "relative" }}>
          useLayoutEffect
        </div>
      ) : null}
    </>
  );
}
export default LayoutEffect;
