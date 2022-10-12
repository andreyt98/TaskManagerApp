const TaskForm = ({ inputValue, setInputValue, tasks, setTasks }) => {

  const submitTask = (e) => {
    e.preventDefault();

    if (!inputValue){

      e.target.style.border = '2px solid red'

      setTimeout(()=>{
        e.target.style.border = 'none'
      },2000)

      return false;
    } 

    const newTodo = {
      description: inputValue,
      completed: false,
      id: Math.random().toString(36).substring(2) + Date.now().toString(36),
    };

    setTasks([...tasks, newTodo]);

    setInputValue("");
  };

  return (
    <form className="d-block-flex bg-info align-items-center justify-content-space-between w-auto rounded-pill py-1 text-nowrap" onSubmit={submitTask}>
      <input type="text" autoComplete="off" placeholder="Type a task..." className="border-0  px-3 py-1 text-dark" onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue} />

      <button type="submit" className="border-0 rounded-circle hover" >
        <i className="bi bi-plus-circle-fill text-primary"></i>
      </button>
    </form>
  );
};

export default TaskForm;
