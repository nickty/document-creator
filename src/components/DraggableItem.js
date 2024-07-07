// src/components/DraggableItem.js
import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ data }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "8px",
        border: "1px solid gray",
        margin: "4px",
      }}
    >
      {data}
    </div>
  );
};

export default DraggableItem;
