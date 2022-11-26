import deleteIcon from "./delete-button.svg"
import { DELETE_TODO } from "../../graphql/mutations/delete-todo"
import { GET_TODOS } from "../../graphql/queries/get-todos"
import { isTaskDeletedFromQueryResult } from "../../store/todosCreator"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../store/index"
import { useMutation } from "@apollo/client"
import style from "./style.module.scss"

type DeleteTodoProps = {
  id: string
}

export const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const dispatch = useAppDispatch()
  const [deleteTodo] = useMutation(DELETE_TODO)

  const removeTodo = async (id: string) => {
    const { data } = await deleteTodo({
      variables: { id: id },
      refetchQueries: [{ query: GET_TODOS }],
    })

    if (!data) {
      isTaskDeletedFromQueryResult({ dispatch, data: false })
      return false
    }

    isTaskDeletedFromQueryResult({ dispatch, data: true })
  }

  return (
    <Link to={"/"}>
      <img
        src={deleteIcon}
        alt="delete"
        className={style.deleteIcon}
        onClick={() => removeTodo(id)}
      />
    </Link>
  )
}
