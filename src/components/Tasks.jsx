import { useRef } from "react";
import { useState, useEffect } from "react";
const Tasks = ({ tasks, setTasks, task }) => {
  const [showEditable, setShowEditable] = useState(false);
  const [editableValue, setEditableValue] = useState("");
  const [newArray, setNewArray] = useState([]);

  const editableTaskRef = useRef();

  const deleteTask = (event) => {
    let newA;
    tasks.forEach((e) => {
      if (e.id == task.id) {
        newA = tasks.filter((el) => el.id != task.id);

        localStorage.clear();
        localStorage.setItem("tasks", JSON.stringify(newA));

        const index = tasks.indexOf(e);
        tasks.splice(index, 1);

        event.target.parentElement.parentElement.style.transform = "scale(0.8)";
        setTimeout(() => {
          setTasks(newA);
        }, 200);
      }
    });
  };

  const checkTask = () => {
    const completedTodo = [...tasks];
    completedTodo.find((el) => {
      if (el.id === task.id) {
        el.completed = !el.completed;
      }
    });

    setTasks(completedTodo);
  };

  useEffect(() => {
    setNewArray([...tasks]);
  }, []);

  function showEditableInput() {
    setShowEditable(!showEditable);

    setTimeout(() => {
      editableTaskRef.current.select();
    }, 0);

    edit();
  }

  function edit() {
    if (showEditable) {
      newArray.forEach((el) => {
        if (el.id == task.id && editableValue !== "") {
          el.description = editableValue;

          localStorage.clear();
          localStorage.setItem("tasks", JSON.stringify(newArray));
          setTasks(newArray);
          setEditableValue("")
        }
      });
    }
  }

  function handleEnterKey(e) {
    if (e.key === "Enter") {
      setShowEditable(!showEditable);
      edit();
    }
  }
  return (
    <div className={"task row rounded py-3 border-5 border-primary border-start d-flex align-items-center justify-content-space-between " + (task.completed ? "completed border-success" : "")}>
      <div className={"w-auto " + (task.completed ? "text-decoration-line-through text-muted" : "")}>{task.description}</div>

      <input
        value={editableValue}
        onChange={(e) => {
          setEditableValue(e.target.value);
        }}
        type="text"
        name=""
        id="new"
        style={{ display: showEditable ? "block" : "none", backgroundColor: "#073056", color: "white", border: "none" }}
        ref={editableTaskRef}
        placeholder="editing task..."
        onKeyPress={(e) => {
          handleEnterKey(e);
        }}
      />

      <div className="w-auto ms-auto ">
        <i className={showEditable ? "bi bi-clipboard2-check me-3" : "bi bi-pencil-fill me-3"} role={"button"} onClick={showEditableInput}></i>
        <i
          className="bi bi-trash3-fill me-3"
          role="button"
          onClick={(e) => {
            deleteTask(e);
          }}
        ></i>
        <i
          className={task.completed ? "text-primary bi bi-check-circle" : "bi bi-check-circle "}
          role="button"
          onClick={(e) => {
            checkTask(e);
          }}
          defaultChecked={task.completed}
        ></i>
      </div>
    </div>
  );
};

export default Tasks;
