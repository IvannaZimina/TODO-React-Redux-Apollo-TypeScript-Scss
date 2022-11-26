import { AddTodo } from "../add-todo-form"
import { isTaskCreateFromQueryResult } from "../../store/todosCreator"
import logo from "./logo.png"
import { Modal } from "../modal"
import { ModalContext } from "../context"
import { TodosCardTitle } from "../todos-card-title"
import { useContext } from "react"
import { useAppSelector, useAppDispatch } from "../../store"
import style from "./style.module.scss"

export const Header: React.FunctionComponent = () => {
  const { displayModal, open, close } = useContext(ModalContext)
  const storeData = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()

  const createHandler = () => {
    close()
  }

  if (storeData.isCreateTodo) {
    setTimeout( () => {
      isTaskCreateFromQueryResult({ dispatch , data: false})
    }, 2000)
  }

  return (
    <header className={style.headerContainer}>
      <section className={style.headerSection}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={style.addTaskBtn}>
          <button onClick={open}>ADD TASK</button>
        </div>

        {storeData.isCreateTodo && (
          <p className={style.addedTask}>Task added.</p>
        )}
      </section>

      <TodosCardTitle />

      {displayModal && (
        <Modal title="Add new task" onClose={close}>
          <AddTodo onCreate={createHandler} />
        </Modal>
      )}
    </header>
  )
}
