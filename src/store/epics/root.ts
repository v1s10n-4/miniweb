import { combineEpics } from "redux-observable";
import PingEpic from "./ping";

export const RootEpic = combineEpics(PingEpic);

export default RootEpic;
