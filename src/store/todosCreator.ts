import * as actionTypes from "./actionTypes"
import * as TypeProps from "./types"

export const filtereByStatus = ({
  dispatch,
  status,
}: TypeProps.FilterByStatusProps) => {
  return dispatch({ type: actionTypes.STATUS, payload: status })
}

export const filtereByUserName = ({
  dispatch,
  userName,
}: TypeProps.FilterByUserNameProps) => {
  return dispatch({ type: actionTypes.USERNAME, payload: userName })
}

export const filterByTitle = ({
  dispatch,
  title,
}: TypeProps.FilterByTitleProps) => {
  return dispatch({ type: actionTypes.TITLE, payload: title })
}

export const isTaskCreateFromQueryResult = ({
  dispatch,
  data,
}: TypeProps.GetResultFromQueryProps) => {
  return dispatch({ type: actionTypes.IS_CREATED_TODO, payload: data })
}

export const isTaskDeletedFromQueryResult = ({
  dispatch,
  data,
}: TypeProps.GetResultFromQueryProps) => {
  return dispatch({ type: actionTypes.DELETE_TODO, payload: data })
}

export const updateTodoFromMutation = ({
  dispatch,
  data,
}: TypeProps.UpdateTodoMutationProps) => {
  return dispatch({ type: actionTypes.UPDATE_TODO, payload: [data] })
}
