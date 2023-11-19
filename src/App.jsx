import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, SetTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      complete: true,
    },
    {
      id: "2",
      title: "Ler Livros",
      complete: false,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    SetTasks(newTasks);
  };

  const handleTaskAddtion = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        complete: false,
      },
    ];

    SetTasks(newTask);
  };

  const handleTaskDelition = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    SetTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <Header />
        <AddTask handleTaskAddtion={handleTaskAddtion} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDelition={handleTaskDelition}
        />
      </div>
    </>
  );
}

export default App;
