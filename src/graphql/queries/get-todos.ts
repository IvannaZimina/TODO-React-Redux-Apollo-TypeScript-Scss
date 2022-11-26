import { gql } from "@apollo/client"

export const GET_TODOS = gql`
  {
    todos {
      data {
        id
        title
        completed
        user {
          id
          name
        }
      }
    }
  }
`
