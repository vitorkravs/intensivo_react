import React, { useState } from "react";
import "./App.css";

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

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
