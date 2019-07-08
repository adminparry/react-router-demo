import { createStore, combineReducers, applyMiddleware } from "redux"

import promise from 'redux-promise';
import logger from 'redux-logger';
import { counterReducer } from "./counter"

console.log(promise)
export const reducers = combineReducers({
	counterReducer
})
export const store = createStore(
	reducers,
	applyMiddleware(promise, logger)
)