import { Card } from "../../components/card"
import { ErrorMessage } from "../../components/error-message"
import { isTaskDeletedFromQueryResult } from "../../store/todosCreator"
import { Link } from "react-router-dom"
import { LoadingData } from "../../components/loading-message"
import { useGetTodosData } from "../../hooks/useGetTodosData"
import { useFilteredList } from "../../hooks/useFilteredList"
import { useAppSelector, useAppDispatch } from "../../store"
import style from "./style.module.scss"

export const TodosList = () => {
  const { loading, error } = useGetTodosData()
  const todosDataList = useFilteredList()
  const storeData = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()

  if (!todosDataList) {
    return <div className={style.cardsTodoContainer}></div>
  }

  if (storeData.isDeletedTodo) {
    setTimeout(() => {
      isTaskDeletedFromQueryResult({ dispatch, data: false })
    }, 2000)
  }

  return (
    <div className={style.cardsTodoContainer}>
      {error && <ErrorMessage errorMessage={error.message} />}
      {storeData.isDeletedTodo && (
        <p className={style.deletedTask}>Task deleted.</p>
      )}
      {todosDataList.map((item) => (
        <Link to={`/${item.id}`} key={item.id}>
          <Card item={item} key={item.id} />
        </Link>
      ))}
      {loading && <LoadingData />}
    </div>
  )
}
