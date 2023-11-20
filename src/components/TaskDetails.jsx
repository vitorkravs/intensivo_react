import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleGoBack}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          obcaecati fuga commodi cupiditate nisi quod.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
