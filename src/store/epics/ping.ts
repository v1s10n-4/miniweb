import { delay, map } from "rxjs";
import { Epic, ofType } from "redux-observable";

export const PingEpic: Epic = (action$) =>
  action$.pipe(
    ofType("PING"),
    delay(1000),
    map(() => ({ type: "PONG" }))
  );

export default PingEpic;
