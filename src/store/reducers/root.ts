import { combineReducers } from "redux";
import PingReducer, { DefaultPingState } from "./ping";

export type RootState = {
  ping: DefaultPingState;
};

export const RootReducer = combineReducers({
  ping: PingReducer,
});
