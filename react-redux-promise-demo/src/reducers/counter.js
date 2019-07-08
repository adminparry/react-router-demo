import {
	INCREATEMENT_COUNTER,
	DESCMENT_COUNTER
} from "../constants";

export const counter_add_action = () => ({
	type: INCREATEMENT_COUNTER,
})
export const counter_take_action = () => ({
	type: DESCMENT_COUNTER,
})

export const counterReducer = (state = 0, action) => {

	switch (action.type) {
		case INCREATEMENT_COUNTER:

			// return await action.payload(state);
			return state += 1;

		case DESCMENT_COUNTER:
			return state -= 1;

		default:
			return state;
	}
}