import { INCREATEMENT_COUNTER, DESCMENT_COUNTER, INCREMENTASYNC_SAGAACTION } from "../../constants";



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

export default {
	counterReducer(state = 0, action) {
		
		switch(action.type){
			case INCREATEMENT_COUNTER:
			return state += 1;

			case DESCMENT_COUNTER:
			return state -= 1;

			default:
			return state;
		}
	},
	cuckReducer(state = 0, action) {
		
		switch(action.type){
			case INCREATEMENT_COUNTER:
			return state += 1;

			case DESCMENT_COUNTER:
			return state -= 1;

			default:
			return state;
		}
	}
}
