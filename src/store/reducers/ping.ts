import { Action } from "redux";

export const PingReducer = (state = { isPinging: false }, action: Action) => {
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
