import TaskForm from "./components/TaskForm";
import TasksContainer from "./components/TasksContainer";
import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container text-info d-flex flex-column align-items-center justify-content-space-between gap-4">
      <div className="row">
        <header className="text-center text-nowrap p-2">
          <h1 className="fw-bold">Task Manager App</h1>
        </header>
      </div>

      <div className="row">
        <TaskForm inputValue={inputValue} setInputValue={setInputValue} tasks={tasks} setTasks={setTasks} />
      </div>

      <div className="row w-100 p-4" style={{ height: "300px" }}>
        {tasks.length > 0 ? <TasksContainer tasks={tasks} setTasks={setTasks} /> : <p className="text-info text-center p-2 rounded"> Start doing something! </p>}
      </div>
    </div>
  );
}

export default App;
