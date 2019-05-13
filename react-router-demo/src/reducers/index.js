import { createStore, combineReducers } from "redux"
import { counterReducer } from "./counter"

export const reducers = combineReducers({
	counterReducer
})
export const store = createStore(reducers)