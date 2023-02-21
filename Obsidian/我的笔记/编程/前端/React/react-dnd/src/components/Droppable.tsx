import React, { useRef } from "react";
import { useDrop } from "react-dnd";

interface DroppableProps {
  children: React.ReactNode;
  title: string;
  state: any;
  handleDrop: (item: any, monitor: any, state: any) => void;
  id: string | number;
}
export default function Droppable({
  title,
  children,
  state,
  handleDrop,
  id,
}: DroppableProps) {
  let ref = useRef(null);
  const [{ canDrop, item }, drop] = useDrop(
    () => ({
      // 限制拖拽的类型
      accept: "card",
      // 传递给drop的参数
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        getHandlerId: monitor.getHandlerId(),
        item: monitor.getItem(),
        // 判断时候可以放置
        canDrop: monitor.canDrop(),
      }),
      item: { id },
      // 释放的动作
      drop: (item, monitor) => {
        return handleDrop(item, monitor, state);
      },
      hover: (item, monitor) => {
        const dropItem = monitor.getItem();
        console.log("11", dropItem);
      },
    }),
    [state]
  );
  console.log({ canDrop });

  drop(ref);
  return (
    <>
      <div id={"drop"} ref={ref}>
        <span>{title}</span>
        {children}
      </div>
    </>
  );
}
