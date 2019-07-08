import { createActions, handleActions, combineActions } from 'redux-actions';

const defaultState = { counter: 10 };
 
const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});
export const actions = { increment, decrement };

export const counterReducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  defaultState
);
