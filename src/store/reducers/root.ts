import { combineReducers } from "redux";
import PingReducer from "./ping";

export const RootReducer = combineReducers({
  PingReducer,
});
