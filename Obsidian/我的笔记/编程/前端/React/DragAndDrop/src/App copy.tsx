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
  border: 0.7rem dashed hsl(192, 100%, 50%);
  padding: 0.7rem;
  &.highlight {
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
  const [source, setSource] = React.useState<null | number>(null);
  const [target, setTarget] = React.useState<null | number>(null);

  const onDragStart = (id: number) => (e: any) => {
    console.log(`#${id} - `, e);
    if (source !== id) setSource(id);
  };
  const onDragOver = (id: number) => (e: any) => {
    // console.log(`#${id} - `, e)
    e.preventDefault();
    if (target !== id) setTarget(id);
  };
  const onDragLeave = (id: number) => (e: any) => {
    // console.log(`#${id} - `, e)
    e.preventDefault();
    setTarget(null);
  };
  const onDrop = () => {
    // console.log('onDrop')
    setSource(null);
    setTarget(null);
    if (target !== null && source !== null) {
      items[target] = items[source];
      items[source] = "";
      setItems([...items]);
    }
  };
  const onDragEnd = () => {
    setSource(null);
    setTarget(null);
  };
  const onDropFile = (e: any) => {
    console.log(e);
    e.preventDefault();
    refInput.current.files = e.dataTransfer.files;
  };
  return (
    <>
      <Wrapper>
        {items.map((x: string, index: number) => (
          <PlaceHolder
            key={index}
            className={target === index ? "highlight" : ""}
            onDragOver={!x ? onDragOver(index) : undefined}
            onDragLeave={onDragLeave(index)}
            onDrop={onDropFile}
          >
            <ItemContainer
              className={source === index ? "current" : ""}
              draggable={!!x}
              onDragStart={onDragStart(index)}
              onDrop={onDrop}
              onDragEnd={onDragEnd}
            >
              <Card>{x}</Card>
            </ItemContainer>
          </PlaceHolder>
        ))}
      </Wrapper>
    </>
  );
}
