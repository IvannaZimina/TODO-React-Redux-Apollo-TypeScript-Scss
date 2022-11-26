import { Header } from "../components/header"
import { Routes, Route } from "react-router-dom"
import { Todo } from '../containers/todo'
import { TodosList } from "../containers/todos-list"
import style from "./style.module.scss"

function App() {
  return (
    <div className={style.mainAppContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<TodosList />} />
        <Route path="/:id" element={<Todo />} />
      </Routes>
    </div>
  )
}

export default App
