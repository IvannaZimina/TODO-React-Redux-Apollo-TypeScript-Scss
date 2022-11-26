import { ErrorMessage } from "../error-message"
import { filtereByStatus, filtereByUserName, filterByTitle } from "../../store/todosCreator"
import { useState, useEffect } from "react"
import { useGetTodosData } from "../../hooks/useGetTodosData"
import { useAppDispatch } from "../../store/index"
import style from "./style.module.scss"

export const TodosCardTitle = () => {
  const { error, todos } = useGetTodosData()
  const dispatch = useAppDispatch()

  const [status, setStatus] = useState<string>()
  const [userName, setUserName] = useState<string>()
  const [titleInput, setTitleInput] = useState<string>()

  useEffect(() => {
    if (!status) {
      return
    }
    filtereByStatus({ dispatch, status })
  }, [status, dispatch])

  useEffect(() => {
    if (!userName) {
      return
    }
    filtereByUserName({ dispatch, userName })
  }, [userName, dispatch])

  useEffect(() => {
    if (!titleInput) {
      return
    }
    filterByTitle({ dispatch, title: titleInput })
  }, [titleInput, dispatch])

  const statusTodos = todos.data?.map((item) => item.completed)
  const statusFiltered = statusTodos?.filter((v, i, a) => a.indexOf(v) === i)
  const statusOptions = statusFiltered?.map((item) => {
    const value = item ? "Completed" : "In progress"
    return <option value={value} key={value}>{value}</option>
  })

  const userNameTodos = todos.data?.map((item) => item.user.name)
  const userNameFiltered = userNameTodos?.filter(
    (v, i, a) => a.indexOf(v) === i
  )

  const userNameOptions = userNameFiltered?.map((item) => {
    return (<option value={item} key={item}>{item}</option>
    )
  })

  const statusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value)
  }

  const usernameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserName(event.target.value)
  }

  const searchInputFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value)
  }

  console.log(titleInput)
  return (
    <div className={style.cardsTitleContainer}>
      {error && <ErrorMessage errorMessage={error.message} />}

      <div className={style.cardHeaderContainer}>
        <div className={style.completedTitleTodo}>
          <p>Status</p>
          <select onChange={statusChange}>
            <option value="All">All</option>
            {statusOptions}
          </select>
        </div>

        <div className={style.userTitleTodo}>
          <p>User name</p>
          <select onChange={usernameChange}>
            <option value="All">All</option>
            {userNameOptions}
          </select>
        </div>

        <div className={style.titleTitleTodo}>
          <p>Title</p>
          <input
            type="text"
            className={style.searchInput}
            value={titleInput}
            onChange={(e) => searchInputFilter(e)}
            placeholder="Search for title..."
          />
        </div>
      </div>
    </div>
  )
}
