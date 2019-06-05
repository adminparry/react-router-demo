import {call, race, put, takeEvery, take, delay,takeLatest, all} from 'redux-saga/effects';

import { INCREMENTASYNC_SAGAACTION, INCREATEMENT_COUNTER } from '../../constants';
import { login, login2 } from '../../services';

export default {

	* [INCREMENTASYNC_SAGAACTION] (action) {
		console.log(action)
		while(true){
			if(action.json.user != 'zs')break;

			yield delay(100);
			yield put({ type: INCREATEMENT_COUNTER });

		}
		// try {
		// 	const auth = yield call(login, action.json);

		// 	yield delay(1000);

		// 	yield put({ type: INCREATEMENT_COUNTER });

		// }catch(e){
		// 	console.info(e)
		// }
	}

}


export function* take_care_of(action){

		
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
