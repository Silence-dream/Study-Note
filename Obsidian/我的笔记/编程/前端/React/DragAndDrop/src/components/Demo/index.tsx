import React from "react";
import styled from "styled-components";
// import "./App.css";

const Wrapper = styled.div`
  height: 60vh;
  width: 70vw;
  padding: 3rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
`;
const PlaceHolder = styled.div`
  border: 0.7rem dashed
    hsl(192.6315789473684, 22.891566265060245%, 16.274509803921568%);
  padding: 0.7rem;
  &.current {
    background-color: rgba(255, 255, 255, 0.7);
    border: 0.7rem dashed hsl(32, 100%, 50%);
  }
`;
const ItemContainer = styled.div`
  border: 0.3rem dotted hsl(128, 100%, 50%);
  padding: 0.1rem;
  width: 7rem;
  height: 7rem;
  line-height: 7rem;
  &.current {
    border: 0.3rem dotted red;
  }
`;
const Card = styled.div`
  font-size: 4rem;
  background-color: hsl(168, 80%, 80%);
  color: hsl(30, 90%, 50%);
  font-weight: bold;

  &.current {
    background-color: hsl(168, 60%, 90%);
    color: white;
  }
`;

const INIT_ITEMS = [
  "🐳",
  "🍄",
  "",
  "🥝",
  "",
  "❄️",
  "🦔",
  "",
  "🥇",
  "",
  "🚀",
  "",
];
export default function Example() {
  const refInput = React.useRef<any>();
  const [items, setItems] = React.useState(INIT_ITEMS);
  // 当前拖拽的元素ID
  const [source, setSource] = React.useState<null | number>(null);
  // 当前拖拽的目标ID
  const [target, setTarget] = React.useState<null | number>(null);

  // 拖拽开始
  function ondragstart(index: number) {
    console.log("拖拽开始");
    setSource(index);
  }

  // 拖拽中   注意： 在拖动元素时，每隔 350 毫秒会触发 ondrag 事件。
  function ondrag() {
    console.log("index");
  }

  // 拖拽结束
  function ondragend() {
    console.log("拖拽结束");
  }
  function ondragover(index: number, e: any) {
    e.preventDefault();
    console.log(index);

    setTarget(index);
  }
  return (
    <>
      <Wrapper>
        {items.map((x: string, index: number) => (
          // draggable 开启拖拽
          <PlaceHolder key={index}>
            <ItemContainer
              draggable={!!x}
              onDragStart={() => ondragstart(index)}
              onDragOver={(e) => ondragover(index, e)}
              onDrag={() => ondrag}
            >
              <Card>{x}</Card>
            </ItemContainer>
          </PlaceHolder>
        ))}
      </Wrapper>
    </>
  );
}
