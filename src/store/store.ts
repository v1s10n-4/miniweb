import reduxedStorageCreatorFactory from "reduxed-chrome-storage";
import { applyMiddleware, createStore } from "redux";
import { REDUXED_STORE_ROOT_KEY } from "../constants";
import { createEpicMiddleware } from "redux-observable";
import RootReducer from "./reducers";
import RootEpic from "./epics";
import { composeWithDevTools } from "@redux-devtools/extension";
import PingReducer from "./reducers/ping";

const reduxedStorageCreatorFactoryOptions = {
  createStore,
  // namespace: "browser",
  storageKey: REDUXED_STORE_ROOT_KEY,
  changeListener: console.log,
  errorListener: console.error,
};

const epicMiddleware = createEpicMiddleware();

// export const initStore = async () => {
// const reduxedStorageCreator = reduxedStorageCreatorFactory(
//   reduxedStorageCreatorFactoryOptions
// );
// const store = await reduxedStorageCreator(
const store = createStore(
  RootReducer,
  // { isPinging: false },
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(RootEpic);
// return store;
// };

export default store;
