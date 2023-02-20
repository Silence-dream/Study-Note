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

  const onDragStart = (index: number) => () => {
    console.log("onDragStart", { index });
    setSource(index);
  };

  const onDragEnd = () => {
    // 获取source之后的值
    setSource(null);

    setTarget(null);
  };

  const onDrageOver =
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setTarget(index);
    };

  //  在一个拖动过程中，释放鼠标键时触发此事件
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    // 释放的时候就是处理数据的时候

    if (source === null || target === null) return;
    items[target] = items[source];
    items[source] = "";
    setItems([...items]);

    setTarget(null);
    setSource(null);
    console.log("Drop");
  };
  return (
    <>
      <Wrapper>
        {items.map((x: string, index: number) => (
          // draggable 开启拖拽
          <PlaceHolder key={index}>
            <ItemContainer
              draggable={!!x}
              onDragStart={onDragStart(index)}
              onDragEnd={onDragEnd}
              onDragOver={!x ? onDrageOver(index) : undefined}
              onDrop={onDrop}
              className={source === index ? "current" : ""}
            >
              <Card>{x}</Card>
            </ItemContainer>
          </PlaceHolder>
        ))}
      </Wrapper>
    </>
  );
}
