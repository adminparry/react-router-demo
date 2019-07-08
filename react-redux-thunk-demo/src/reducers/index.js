import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { counterReducer } from "./counter"

export const reducers = combineReducers({
	counterReducer
})
export const store = createStore(
	reducers,
	applyMiddleware(thunk, logger)
)