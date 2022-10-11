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
      </div>
    </div>
  );
};

export default Tasks;
