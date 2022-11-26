import { gql } from "@apollo/client"

export const GET_TODO_BY_ID = gql`
  query todo($id: ID!) {
    todo(id: $id) {
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
