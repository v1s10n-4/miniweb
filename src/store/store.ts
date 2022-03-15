import reduxedStorageCreatorFactory from "reduxed-chrome-storage";
import { applyMiddleware, compose, createStore } from "redux";
import { REDUXED_STORE_ROOT_KEY } from "../constants";
import { createEpicMiddleware } from "redux-observable";
import RootReducer from "./reducers";
import RootEpic from "./epics";
import DevTools from "../utils/DevTools/ReduxDevTools";

const RCSOptions = {
  createStore,
  storageKey: REDUXED_STORE_ROOT_KEY,
};

export const configureStore = async () => {
  const epicMiddleware = createEpicMiddleware();

  const enhancer = compose(
    applyMiddleware(epicMiddleware),
    DevTools.instrument()
  );
  const asyncStoreCreator = reduxedStorageCreatorFactory(RCSOptions);
  const store = await asyncStoreCreator(
    RootReducer,
    { ping: { isPinging: false } },
    enhancer
  );
  epicMiddleware.run(RootEpic);
  return store;
};
export default configureStore;
