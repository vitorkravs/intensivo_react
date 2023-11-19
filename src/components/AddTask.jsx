import React, { useState } from "react";

import "./Addtask.css";

import Button from "./Button";
import "./Button.css";

const AddTask = ({ handleTaskAddtion }) => {
  const [inputData, SetInputData] = useState("");

  const handleInputChange = (e) => {
    SetInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddtion(inputData);
    SetInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      ;
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
