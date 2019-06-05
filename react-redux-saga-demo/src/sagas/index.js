import {takeLatest, takeEvery} from 'redux-saga/effects';

const modulesFiles = require.context('./modules', true, /\.js$/)

export function* rootSaga() {


   for( let modulePath of modulesFiles.keys() ){
   		const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
   		const value = modulesFiles(modulePath);
   		const expose = value[moduleName] || value.default;
   		
   		for(const actionName in expose){
   			yield takeLatest(actionName, expose[actionName])
  			// yield takeEvery(INCREMENTASYNC_SAGAACTION, take_care_of)
   		}

   }


}