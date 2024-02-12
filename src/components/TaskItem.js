import { FaTrash } from "react-icons/fa";
import TaskUpdate from "./TaskUpdate";


const TaskItem = (todo, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo) => {
  return (
    <div>
        <ul>
          <li>
            <span onClick={() => handleCompleteTodo(todo.id)}>
              <label htmlFor="" className="container-done"></label>
            </span>
            <TaskUpdate
            todo={todo}
            handleUpdateTodo={handleUpdateTodo}
            />
            <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}> <FaTrash /> </button>
          </li>
        </ul>
    </div>
  )
}

export default TaskItem