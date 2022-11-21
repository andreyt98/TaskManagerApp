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

  return (
    <div className={"task row rounded py-3 border-5 border-primary border-start d-flex align-items-center justify-content-space-between " + (task.completed ? "completed border-success": "")}>
      <div className={"w-auto "  + (task.completed ? "text-decoration-line-through text-muted" :"")}>{task.description}</div>
      <div className="w-auto ms-auto ">
        <input type="checkbox" className="" name="" id="" onClick={checkTask} defaultChecked={task.completed} />
        <span role="button"  className="ms-3" onClick={deleteTask}>🗑️</span>
      </div>
    </div>
  );
};

export default Tasks;
