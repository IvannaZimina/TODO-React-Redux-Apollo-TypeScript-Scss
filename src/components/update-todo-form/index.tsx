import { GET_TODOS } from "../../graphql/queries/get-todos"
import { ErrorMessage } from "../error-message"
import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { useAppDispatch } from "../../store/index"
import { UPDATE_TODO } from "../../graphql/mutations/update-todo"
import { UpdateTodoState } from "../../types"
import { updateTodoFromMutation } from "../../store/todosCreator"
import style from "./style.module.scss"

type UpdateTodoFormProps = {
  id: string
  isUpdateFormDisplay: boolean
  setIsUpdateFormDisplay: (isUpdateFormDisplay: boolean) => void
  title: string
}

export const UpdateTodoForm = ({
  id,
  title,
  setIsUpdateFormDisplay,
}: UpdateTodoFormProps) => {
  const dispatch = useAppDispatch()
  const [todo, setTodo] = useState<UpdateTodoState>({
    title: "",
    completed: false,
  })

  const [updateTodo] = useMutation(UPDATE_TODO)
  const [error, setError] = useState("")

  const updateHandler = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    setError("")

    const { data } = await updateTodo({
      variables: { id: id, title: todo.title, completed: todo.completed },
      refetchQueries: [{ query: GET_TODOS }],
    })

    if (data) {
      updateTodoFromMutation({ dispatch, data })
    }

    setIsUpdateFormDisplay(false)
  }

  return (
    <form onSubmit={updateHandler}>
      <div className={style.formContainter}>
        <label className={style.inputName}>
          <input
            type="text"
            placeholder={title}
            value={todo.title}
            onChange={(ev) => setTodo({ ...todo, title: ev.target.value })}
          />
        </label>

        {error && <ErrorMessage errorMessage={error} />}

        <select name="completed" className={style.updateSelector}>
          <option
            value="true"
            onChange={(ev) => setTodo({ ...todo, completed: !!ev.target })}
          >
            Completed
          </option>
          <option
            value="false"
            onChange={(ev) => setTodo({ ...todo, completed: !!ev.target })}
          >
            In progress
          </option>
        </select>

        <button type="submit" className={style.updateTodoBtn}>
          Update task
        </button>
      </div>
    </form>
  )
}
