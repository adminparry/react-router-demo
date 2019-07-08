import {
	INCREATEMENT_COUNTER,
	DESCMENT_COUNTER,
} from "../constants";

export const counter_add_action = () => ({
	type: INCREATEMENT_COUNTER,
})
export const counter_take_action = () => ({
	type: DESCMENT_COUNTER,
})
export const counter_add_async_action = (dispatch, getState) => {
	console.log(getState())
	setTimeout(() => {
		dispatch(counter_add_action())
	},1000)
}

export const counterReducer = (state = 0, action) => {

	switch (action.type) {
		case INCREATEMENT_COUNTER:
			return state += 1;

		case DESCMENT_COUNTER:
			return state -= 1;
		default:
			return state;
	}
}