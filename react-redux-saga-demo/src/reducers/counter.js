import { INCREATEMENT_COUNTER, DESCMENT_COUNTER, INCREMENTASYNC_SAGAACTION } from "../constants";

import {call, race, put, takeEvery, take, delay,takeLatest, all} from 'redux-saga/effects';

export const counter_add_action = () => ({
  type: INCREATEMENT_COUNTER,
})
export const counter_take_action = () => ({
  type: DESCMENT_COUNTER,
})
export const incrementAsync_sagaAction = (json={user:"zs",ps:"123456"}) => ({
	type: INCREMENTASYNC_SAGAACTION,
	json
});
function login({user,ps}){
	return new Promise((resolve, reject)=>{
		setTimeout(function(){
			
			if(user == "zs" && ps == "123456"){
				resolve("success");

			}else{
				reject("fail")
			}
			
		},330)
	})
	
}
function login2({user,ps}){
	return new Promise((resolve, reject)=>{
		setTimeout(function(){
			
			if(user == "zs" && ps == "123456"){
				resolve("success");
				console.log(login2.name)
			}else{
				reject("fail")
			}
			
		},630)
	})
	
}
function* take_care_of(action){

		
	try{
		const { auth, dy, auth2 } = yield race({
			auth: call(login, action.json),
			auth2: call(login2, action.json),

			dy: delay(10),

		})
		// const auth = yield call(login, action.json);

		// console.log(auth, dy)
		// console.log(auth)

		// const dy = yield delay(1000);
		// console.log(dy)
		
		yield put({ type: INCREATEMENT_COUNTER });

	}catch(e){
		console.info(e)
	}

	// mock a sync request
	
}
export function* rootSaga() {
  
  yield takeLatest(INCREMENTASYNC_SAGAACTION, take_care_of)
  // yield takeEvery(INCREMENTASYNC_SAGAACTION, take_care_of)

}
export const counterReducer = (state = 0, action) => {
	
	switch(action.type){
		case INCREATEMENT_COUNTER:
		return state += 1;

		case DESCMENT_COUNTER:
		return state -= 1;

		default:
		return state;
	}
}