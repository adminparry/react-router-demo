import { createStore, combineReducers, applyMiddleware } from "redux"

import createSagaMiddleware from 'redux-saga'; 

import { counterReducer, rootSaga } from "./counter"

const sagaMiddleware = createSagaMiddleware() 

export const reducers = combineReducers({
	counterReducer
})
export const store = createStore(reducers,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)