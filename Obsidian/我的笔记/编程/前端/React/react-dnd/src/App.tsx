import "./App.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";
import { useState } from "react";

function App() {
  const [box1, setBox1] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);
  const [box2, setBox2] = useState([
    {
      id: 4,
    },
    {
      id: 5,
    },
  ]);

  function handleDropBox1(item: { id: number }) {
    let id = item.id;

    let box1Index = box1.some((item) => item.id === id);
    if (box1Index) return;

    let index = box2.findIndex((item) => item.id === id);
    let newBox2 = [...box2];
    newBox2.splice(index, 1);
    setBox2(newBox2);
    setBox1([...box1, item]);
  }
  function handleDropBox2(item: { id: number }) {
    let id = item.id;

    let box2Index = box2.some((item) => item.id === id);
    if (box2Index) return;

    let index = box1.findIndex((item) => item.id === id);
    let newBox1 = [...box1];
    newBox1.splice(index, 1);
    setBox1(newBox1);
    setBox2([...box2, item]);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Droppable
          title={"box1"}
          state={box1}
          handleDrop={handleDropBox1}
          id={1}
        >
          {box1.map((item) => (
            <Draggable id={item.id} state={box1} key={item.id} />
          ))}
        </Droppable>
        <br />
        <Droppable
          title={"box2"}
          state={box2}
          handleDrop={handleDropBox2}
          id={2}
        >
          {box2.map((item) => (
            <Draggable id={item.id} state={box1} key={item.id} />
          ))}
        </Droppable>
      </div>
    </DndProvider>
  );
}
// https://github.dev/KelvinQiu802/react-dnd-playground/blob/master/src/components/Eg1.jsx
export default App;
