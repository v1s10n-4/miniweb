// import reduxedStorageCreatorFactory from "reduxed-chrome-storage";
import { applyMiddleware, compose, createStore } from "redux";
// import { REDUXED_STORE_ROOT_KEY } from "../constants";
import { createEpicMiddleware } from "redux-observable";
import RootReducer from "./reducers";
import RootEpic from "./epics";
import DevTools from "../utils/DevTools/ReduxDevTools";

// const reduxedStorageCreatorFactoryOptions = {
//   createStore,
//   namespace: "browser",
//   storageKey: REDUXED_STORE_ROOT_KEY,
//   changeListener: console.log,
//   errorListener: console.error,
// };

const epicMiddleware = createEpicMiddleware();

const enhancer = compose(
  applyMiddleware(epicMiddleware),
  DevTools.instrument()
);

export const configureStore = () => {
  const store = createStore(
    RootReducer,
    { ping: { isPinging: false } },
    enhancer
  );
  epicMiddleware.run(RootEpic);
  return store;
};
export default configureStore;
