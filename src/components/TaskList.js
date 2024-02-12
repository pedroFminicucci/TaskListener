import TaskItem from "./TaskItem"

const TaskList = ({todos, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo}) => {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TaskItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          />
        ))}
        </ul>
    </div>
  )
}

export default TaskList