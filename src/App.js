// src/App.js
import React, { useState } from "react";
import DraggableItem from "./components/DraggableItem";
import DropArea from "./components/DropArea";

const App = () => {
  const [documentContent, setDocumentContent] = useState([]);
  const mockData = [
    "Example Data 1",
    "Example Data 2",
    "Example Data 3",
    "Example Data 4",
  ];

  const handleDrop = (data) => {
    setDocumentContent((prevContent) => [...prevContent, data]);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div className="api-data" style={{ flex: 1, marginRight: "20px" }}>
        {mockData.map((item, index) => (
          <DraggableItem key={index} data={item} />
        ))}
      </div>
      <DropArea onDrop={handleDrop} />
      <div
        className="document-content"
        style={{
          flex: 1,
          marginLeft: "20px",
          padding: "10px",
          border: "1px solid black",
          minHeight: "200px",
        }}
      >
        <h3>Document Content</h3>
        {documentContent.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
