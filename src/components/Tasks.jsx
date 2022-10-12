const Tasks = ({ tasks, setTasks, task }) => {
  const deleteTask = () => {
    let newA;

    tasks.forEach((e) => {
      if (e.id == task.id) {
        newA = tasks.filter((el) => el.id != task.id);

        localStorage.clear();
        localStorage.setItem("tasks", JSON.stringify(newA));

        const index = tasks.indexOf(e);
        tasks.splice(index, 1);

        setTasks(newA);
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

<<<<<<< HEAD
  return (
    <div className={"task row rounded py-3 border-5 border-primary border-start d-flex align-items-center justify-content-space-between " + (task.completed ? "completed border-success": "")}>
      <div className={"w-auto "  + (task.completed ? "text-decoration-line-through text-muted" :"")}>{task.description}</div>
      <div className="w-auto ms-auto ">
        <input type="checkbox" className="" name="" id="" onClick={checkTask} defaultChecked={task.completed} />
        <span role="button"  className="ms-3" onClick={deleteTask}>🗑️</span>
=======
  const bg = task.completed ? "bg-dark text-decoration-line-through border-success text-muted" : " bg-light";
  return (
    <div className={`row rounded py-3 border-5 border-primary border-start d-flex align-items-center justify-content-space-between ${bg}`}>
      <div className="w-auto">{task.description}</div>
      <div className="w-auto ms-auto ">
        <input type="checkbox" name="" id="" onClick={checkTask} defaultChecked={task.completed} />

        <button onClick={deleteTask} className="bg-transparent border-0">
          <span role="button" className="ms-3 ">
            🗑️
          </span>
        </button>
>>>>>>> 3d68e0343f5e690f0967f9c404741dd2f7f2698e
      </div>
    </div>
  );
};

export default Tasks;
