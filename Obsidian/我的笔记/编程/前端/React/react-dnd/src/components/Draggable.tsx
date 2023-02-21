import { useDrag } from "react-dnd";

interface DraggableProps {
  id: string | number;
  state: any;
}
export default function Draggable({ id, state }: DraggableProps) {
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: "card",
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        id: id,
      }),
    };
  }, [state]);
  console.log("isDragging", isDragging);

  const opacity = isDragging ? 0.4 : 1;
  return (
    <>
      <div id={"drag"} ref={drag} style={{ opacity }}>
        <span>{id}</span>
      </div>
    </>
  );
}
