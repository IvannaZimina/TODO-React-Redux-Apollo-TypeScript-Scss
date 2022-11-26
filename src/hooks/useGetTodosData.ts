import { GetTodosListResult } from "../types"
import { GET_TODOS } from "../graphql/queries/get-todos"
import { useQuery } from "@apollo/client"

export const useGetTodosData = (): GetTodosListResult => {
  const { loading, error, data } = useQuery<GetTodosListResult>(GET_TODOS)

  if (!data) {
    return { loading, error, todos: { data: [] } }
  }

  return { loading, error, todos: { data: data.todos.data } }
}
