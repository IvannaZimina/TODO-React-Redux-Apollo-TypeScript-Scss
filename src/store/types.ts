import { DataResult } from "../types"
import { AppDispatch } from "./index"

export type DefaultStateProps = {
  status: string
  userName: string
  title: string
  isCreateTodo: boolean
  isDeletedTodo: boolean
  updateTodo: DataResult[]
}

export type FilterByStatusProps = {
  dispatch: AppDispatch
  status: string
}

export type FilterByUserNameProps = {
  dispatch: AppDispatch
  userName: string
}

export type FilterByTitleProps = {
  dispatch: AppDispatch
  title: string
}

export type GetResultFromQueryProps = {
  dispatch: AppDispatch
  data: boolean
}

export type UpdateTodoMutationProps = {
  dispatch: AppDispatch
  data: DataResult
}
