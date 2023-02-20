import React from "react";
import styled from "styled-components";
import "./App.css";

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
  border: 0.7rem dashed hsl(192.6315789473684, 22.891566265060245%, 16.274509803921568%);
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
export default function Demo() {
  const refInput = React.useRef<any>();
  const [items, setItems] = React.useState(INIT_ITEMS);
  // 当前拖拽的元素ID
  const [source, setSource] = React.useState<null | number>(null);
  // 当前拖拽的目标ID
  const [target, setTarget] = React.useState<null | number>(null);

  // 拖拽开始
  const onDragStart =
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      setSource(index);
    };

  // 事件在可拖动元素或选取的文本正在拖动到放置目标时触发
  const onDragOver =
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setTarget(index);
      console.log("DragOver");
    };
  // 拖拽进入目标离开
  const onDragLeave =
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      setTarget(null);
      console.log("DragLeave");
    };
  // 事件在可拖动元素或选取的文本放置在目标区域时触发
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    // 如果要触发drop事件，必须阻止默认事件,如在onDragOver中调用e.preventDefault()
    console.log(e, "onDrop");
    if (source !== null && target !== null) {
      items[target] = items[source];
      items[source] = "";
      setItems([...items]);

      // const newItems = [...items];
      // newItems[target] = items[source];
      // newItems[source] = "";
      // setItems(newItems);
    }
    setTarget(null);
    setSource(null);
  };
  // 拖拽结束
  const onDragEnd = () => {
    setTarget(null);
    setSource(null);
    console.log("DragEnd");
  };
  return (
    <>
      <Wrapper>
        {items.map((x: string, index: number) => (
          // draggable 开启拖拽
          <PlaceHolder
            className={target === index ? "current" : ""}
            key={index}
            onDragOver={!x ? onDragOver(index) : undefined}
            onDragLeave={onDragLeave(index)}
          >
            <ItemContainer
              draggable={!!x}
              className={source === index ? "current" : ""}
              // onDragStart={(e) => onDragStart(e, index)}
              onDragStart={onDragStart(index)}
              onDragEnd={onDragEnd}
              onDrop={onDrop}
            >
              <Card>{x}</Card>
            </ItemContainer>
          </PlaceHolder>
        ))}
      </Wrapper>
    </>
  );
}
