import { Route, Routes } from "react-router-dom"
import LogIn from "./LogIn"
import ToDoTasks from "./ToDoTasks"

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ToDoTasks/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </div>
  )
}

export default Main