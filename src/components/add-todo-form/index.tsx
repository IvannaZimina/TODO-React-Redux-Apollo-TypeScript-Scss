import { AddTodoProps } from "../../types"
import { CREATE_TODO } from "../../graphql/mutations/create-todo"
import { ErrorMessage } from "../error-message"
import { GET_TODOS } from "../../graphql/queries/get-todos"
import { isTaskCreateFromQueryResult } from "../../store/todosCreator"
import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { useAppDispatch } from "../../store/index"
import style from "./style.module.scss"

export type AddTodoFormProps = {
  onCreate: (task: AddTodoProps) => void
}

export const AddTodo = ({ onCreate }: AddTodoFormProps) => {
  const dispatch = useAppDispatch()
  const [task, setTask] = useState({
    title: "",
    completed: false,
  })

  const [createTodo] = useMutation(CREATE_TODO)
  const [error, setError] = useState("")

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    setError("")

    const { data } = await createTodo({
      variables: { title: task.title, completed: task.completed },
      refetchQueries: [{ query: GET_TODOS }],
    })

    if (data) {
      isTaskCreateFromQueryResult({ dispatch, data: true })
    }

    onCreate(task)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.formContainter}>
        <label className={style.inputName}>
          <input
            type="text"
            placeholder="Enter title"
            pattern="([a-zA-Z0-9]{2,})"
            value={task.title}
            onChange={(ev) => setTask({ ...task, title: ev.target.value })}
          />
        </label>

        {error && <ErrorMessage errorMessage={error} />}

        <select name="completed">
          <option
            value="true"
            onChange={(ev) => setTask({ ...task, completed: !!ev.target })}
          >
            Completed
          </option>
          <option
            value="false"
            onChange={(ev) => setTask({ ...task, completed: !!ev.target })}
          >
            In progress
          </option>
        </select>

        <button type="submit" className={style.createTodoBtn}>
          Add task
        </button>
      </div>
    </form>
  )
}
