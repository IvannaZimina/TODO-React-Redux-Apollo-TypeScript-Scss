import { ApolloError } from "@apollo/client"

export type DataResult = {
  id: string
  title: string
  completed: boolean
  user: {
    id: string
    name: string
  }
}

export type GetTodosListResult = {
  error: ApolloError | undefined
  loading: boolean
  todos: {
    data?: DataResult[]
  }
}

export type AddTodoProps = {
  title: string
  completed: boolean
}

export type UpdateTodoState = {
  title: string
  completed: boolean
}

