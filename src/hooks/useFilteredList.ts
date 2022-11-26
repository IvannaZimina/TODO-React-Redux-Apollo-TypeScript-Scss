import { useGetTodosData } from "./useGetTodosData"
import { useAppSelector } from "../store"
import { DataResult } from "../types"

export const useFilteredList = (): DataResult[] => {
  const { todos } = useGetTodosData()
  const storeData = useAppSelector((state) => state.todos)

  let todosList = todos.data

  if (storeData.status === "Completed") {
    todosList = todos.data?.filter((todos) => todos.completed)
  }

  if (storeData.status === "In progress") {
    todosList = todos.data?.filter((todos) => !todos.completed)
  }

  if (storeData.userName) {
    todosList = todos.data?.filter(
      (todos) => todos.user.name === storeData.userName
    )
  }

  if (storeData.title) {
    todosList = todos.data?.filter((todos) =>
      todos.title.toLowerCase().includes(storeData.title)
    )
  }

  if (storeData.status === "Completed" && storeData.userName) {
    todosList = todos.data
      ?.filter((todos) => todos.completed)
      .filter((todos) => todos.user.name === storeData.userName)
  }

  if (storeData.status === "In progress" && storeData.userName) {
    todosList = todos.data
      ?.filter((todos) => !todos.completed)
      .filter((todos) => todos.user.name === storeData.userName)
  }

  if (storeData.status === "Completed" && storeData.title) {
    todosList = todos.data
      ?.filter((todos) => todos.completed)
      .filter((todos) => todos.title.toLowerCase().includes(storeData.title))
  }

  if (storeData.status === "In progress" && storeData.title) {
    todosList = todos.data
      ?.filter((todos) => !todos.completed)
      .filter((todos) => todos.title.toLowerCase().includes(storeData.title))
  }

  if (storeData.userName && storeData.title) {
    todosList = todos.data
      ?.filter((todos) => todos.user.name === storeData.userName)
      .filter((todos) => todos.title.toLowerCase().includes(storeData.title))
  }

  if (storeData.userName && storeData.title) {
    todosList = todos.data
      ?.filter((todos) => todos.user.name === storeData.userName)
      .filter((todos) => todos.title.toLowerCase().includes(storeData.title))
  }

  if (
    storeData.status === "Completed" &&
    storeData.userName &&
    storeData.title
  ) {
    todosList = todos.data
      ?.filter((todos) => todos.completed)
      .filter((todos) => todos.user.name === storeData.userName)
      .filter((todos) => todos.title.toLowerCase().includes(storeData.title))
  }

  if (
    storeData.status === "In progress" &&
    storeData.userName &&
    storeData.title
  ) {
    todosList = todos.data
      ?.filter((todos) => !todos.completed)
      .filter((todos) => todos.user.name === storeData.userName)
      .filter((todos) => todos.title.toLowerCase().includes(storeData.title))
  }

  if (storeData.userName === "All") {
    todosList = todos.data
  }

  if (storeData.status === "All") {
    todosList = todos.data
  }

  return todosList || []
}
