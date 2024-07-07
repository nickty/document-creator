// src/components/DropArea.js
import React from "react";
import { useDrop } from "react-dnd";

const DropArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => onDrop(item.data),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        border: "1px solid black",
        padding: "10px",
        minHeight: "200px",
        backgroundColor: isOver ? "#f0f0f0" : "white",
      }}
    >
      {isOver ? "Release to drop" : "Drag items here"}
    </div>
  );
};

export default DropArea;
