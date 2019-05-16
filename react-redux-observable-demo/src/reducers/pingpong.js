
import { delay, mapTo } from "rxjs/operators";
import { ofType, ActionsObservable } from "redux-observable";
import { PONG_EXAMPLE, PING_EXAMPLE } from "../constants";

export const ping = () => ({ type: PING_EXAMPLE });
export const pong = () => ({ type: PONG_EXAMPLE });

export const pingEpic = action$ => action$.pipe(
  ofType(PING_EXAMPLE),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo(pong())
);

export const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING_EXAMPLE:
      return { isPinging: true };

    case PONG_EXAMPLE:
      return { isPinging: !state.isPinging };

    default:
      return state;
  }
};