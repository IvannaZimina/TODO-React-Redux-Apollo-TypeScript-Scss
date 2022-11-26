import { DeleteTodo } from "../../components/delete-todo-btn"
import { ErrorMessage } from "../../components/error-message"
import { LoadingData } from "../../components/loading-message"
import { useGetTodoById } from "../../hooks/useGetTodoById"
import { useParams } from "react-router"
import { useState } from "react"
import { UpdateTodo } from "../../components/update-todo-btn"
import { UpdateTodoForm } from "../../components/update-todo-form"
import style from "./style.module.scss"

export const Todo = () => {
  const { id } = useParams()
  const { error, loading, todo } = useGetTodoById(id as string)
  const [isUpdateFormDisplay, setIsUpdateFormDisplay] = useState(false)

  if (!todo) {
    return <h4>No todo datas.</h4>
  }

  if (loading) {
    return <LoadingData />
  }

  if (error) {
    return <ErrorMessage errorMessage={error.message} />
  }

  return (
    <div className={style.todoCardContainer} key={todo.id}>
      <div className={style.statusTodoCard}>
        <p>Status:</p>
        <p>{todo.completed ? "Completed" : "In progress"}</p>
      </div>
      <div className={style.usernameTodoCard}>
        <p>User name:</p>
        <p>{todo.user.name}</p>
      </div>
      <div className={style.titleTodoCard}>
        <p>Title:</p>
        <p>{todo.title}</p>
      </div>

      <div className={style.manageIcons}>
        <UpdateTodo
          id={todo.id}
          isUpdateFormDisplay={isUpdateFormDisplay}
          setIsUpdateFormDisplay={setIsUpdateFormDisplay}
        />
        <DeleteTodo id={todo.id} />
      </div>

      {isUpdateFormDisplay && (
        <UpdateTodoForm
          id={todo.id}
          title={todo.title}
          isUpdateFormDisplay={isUpdateFormDisplay}
          setIsUpdateFormDisplay={setIsUpdateFormDisplay}
        />
      )}
    </div>
  )
}
