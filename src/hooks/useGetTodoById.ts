import { useQuery } from "@apollo/client"
import { GET_TODO_BY_ID } from "../graphql/queries/get-todo-by-id"

export const useGetTodoById = (id: string) => {
  const { error, loading, data } = useQuery(GET_TODO_BY_ID, {
    variables: { id: id },
  })

  if (!data) {
    return { loading, error, todo: data }
  }

  return { loading, error, todo: data.todo }
}
