import { Action } from "redux";

export const defaultPingState = { isPinging: false };

export type DefaultPingState = typeof defaultPingState;

export const PingReducer = (state = defaultPingState, action: Action) => {
  switch (action.type) {
    case "PING":
      return { isPinging: true };

    case "PONG":
      return { isPinging: false };

    default:
      return state;
  }
};

export default PingReducer;
