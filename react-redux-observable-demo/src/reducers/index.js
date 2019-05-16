import { createStore, combineReducers, applyMiddleware} from "redux";
import { createEpicMiddleware,combineEpics } from 'redux-observable';

import { counterReducer } from "./counter"
import { pingReducer, pingEpic } from "./pingpong";

export const reducers = combineReducers({
	counterReducer,
	pingReducer
})
// export const store = createStore(reducers);

export const rootEpics = combineEpics(
	pingEpic,
	
);
const epicMiddleware = createEpicMiddleware();
export const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpics);