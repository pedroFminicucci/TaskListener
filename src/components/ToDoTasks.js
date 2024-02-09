import AddTasks from "./AddTasks"
import TaskList from "./TaskList"

const ToDoTasks = () => {
  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <h2>Agregar tarea</h2>
        <AddTasks/>
      </div>
      <TaskList/>
    </div>
  )
}

export default ToDoTasks