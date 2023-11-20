import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

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

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      SetTasks(data);
    };

    fetchTasks();
  }, []);

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
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddtion={handleTaskAddtion} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDelition={handleTaskDelition}
                />
              </>
            }
          />
          <Route
            path="/:taskTitle"
            exact
            element={
              <>
                <TaskDetails />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
