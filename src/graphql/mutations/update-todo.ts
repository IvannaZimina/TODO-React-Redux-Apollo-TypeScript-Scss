import { gql } from "@apollo/client"

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $title: String!, $completed: Boolean!) {
    updateTodo(id: $id, input: { title: $title, completed:$completed }) {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`
