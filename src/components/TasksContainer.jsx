import Tasks from './Tasks'

const TasksContainer = ({tasks, setTasks}) => {

    return (
      <div className="container task-container d-flex flex-column justify-content-space-between gap-4 border border-light p-4 overflow-auto" style={{height: "300px"}}>
        {tasks.map( (task) =>{      
          return (
              <Tasks 
              tasks={tasks} 
              setTasks={setTasks}
              task = {task}
              key={task.id} 
              />
            )
          })}
      </div>
    )
}

export default TasksContainer