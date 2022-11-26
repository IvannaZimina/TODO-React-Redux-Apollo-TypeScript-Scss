import { DefaultStateProps } from "./types"
import update from "immutability-helper"
import {
  STATUS,
  USERNAME,
  IS_CREATED_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TITLE,
} from "./actionTypes"

const defaultState: DefaultStateProps = {
  status: "",
  userName: "",
  title: "",
  isCreateTodo: false,
  isDeletedTodo: false,
  updateTodo: [],
}

export const todosReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case STATUS: {
      return update(state, { status: { $set: action.payload } })
    }
    case USERNAME: {
      return update(state, { userName: { $set: action.payload } })
    }
    case TITLE: {
      return update(state, { title: { $set: action.payload } })
    }
    case IS_CREATED_TODO: {
      return update(state, { isCreateTodo: { $set: action.payload } })
    }
    case UPDATE_TODO: {
      return update(state, { updateTodo: { $set: action.payload } })
    }
    case DELETE_TODO: {
      return update(state, { isDeletedTodo: { $set: action.payload } })
    }
  }
  return state
}
