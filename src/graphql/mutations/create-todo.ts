import { gql }  from "@apollo/client"

export const CREATE_TODO = gql`
  mutation createTodo($title: String!, $completed: Boolean!) {
    createTodo(input: {title: $title, completed: $completed}) {
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
