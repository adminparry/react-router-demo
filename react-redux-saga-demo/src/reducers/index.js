import { createStore, combineReducers, applyMiddleware } from "redux"

import createSagaMiddleware from 'redux-saga'; 

import { rootSaga } from '../sagas';

const modulesFiles = require.context('./modules', true, /\.js$/)



const sagaMiddleware = createSagaMiddleware() ;

const allReducers = modulesFiles.keys().reduce((modules, modulePath) => {
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
	const value = modulesFiles(modulePath);
	modules = value[moduleName] || value.default;

	return modules;
},{})
	console.log(allReducers);

export const reducers = combineReducers(allReducers)
export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)