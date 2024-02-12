import {  useTodo } from "./components/hooks/useTask";
import ToDoTasks from "./components/ToDoTasks";
import TaskList from "./components/TaskList";
import AddTasks from "./components/AddTasks";

function App() {

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo(); 

  return (
    <>
    <div className="card-to-do">
    <h1>Task List</h1>
    <div className="counter-todos">
      <h3>N° Tareas:{todosCount}</h3>
      <h3>N° Tareas Pendientes:{pendingTodosCount}</h3>
    </div>
    <div className="add-todo">
      <h3>Agregar tarea</h3>
      <AddTasks handleNewTodo={handleNewTodo}/>
    </div>

    <TaskList 
    todos={todos}
    handleUpdateTodo={handleUpdateTodo}
    handleDeleteTodo={handleDeleteTodo}
    handleCompleteTodo={handleCompleteTodo}
    />

    </div>
    </>
  );
}

export default App;
