import editIcon from "./edit-button.svg"
import style from "./style.module.scss"

type UpdateTodoProps = {
  id: string
  isUpdateFormDisplay: boolean
  setIsUpdateFormDisplay: (isUpdateFormDisplay: boolean) => void
}

export const UpdateTodo = ({ id, setIsUpdateFormDisplay }: UpdateTodoProps) => {
  const displayUpdateForm = () => {
    setIsUpdateFormDisplay(true)
  }

  return (
    <img
      src={editIcon}
      alt="delete"
      className={style.editIcon}
      onClick={displayUpdateForm}
    />
  )
}
