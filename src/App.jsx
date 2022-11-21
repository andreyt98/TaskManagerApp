import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";

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

      <div className="row w-100">
        <div className="task-container d-flex flex-column justify-content-space-between gap-4 p-4 overflow-auto" style={{ height: "300px" }}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return <Tasks tasks={tasks} setTasks={setTasks} task={task} key={task.id} />;
            })
          ) : (
            <p className="text-info text-center p-2 rounded"> Start doing something! </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
