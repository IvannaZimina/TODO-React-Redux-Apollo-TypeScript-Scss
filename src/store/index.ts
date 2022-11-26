import { combineReducers } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { todosReducer } from "./todosReducer"
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

const reducers = combineReducers({
  todos: todosReducer,
})

const store = configureStore({ reducer: reducers })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
