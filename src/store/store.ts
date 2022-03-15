import { applyMiddleware, compose, createStore } from "redux";
import { REDUXED_STORE_ROOT_KEY } from "../constants";
import { createEpicMiddleware } from "redux-observable";
import RootReducer from "./reducers";
import RootEpic from "./epics";
import DevTools from "../utils/DevTools/ReduxDevTools";
import { persistStore, persistReducer } from "redux-persist";
// @ts-ignore
import createChromeStorage from "redux-persist-chrome-storage";

const config = {
  key: REDUXED_STORE_ROOT_KEY,
  // @ts-ignore
  storage: createChromeStorage(window.chrome, "local"),
};

const persistedReducer = persistReducer(config, RootReducer);

const epicMiddleware = createEpicMiddleware();

const enhancer = compose(
  applyMiddleware(epicMiddleware),
  DevTools.instrument()
);

export const configureStore = () => {
  let store = createStore(
    persistedReducer,
    { ping: { isPinging: false } },
    enhancer
  );
  let persistor = persistStore(store);
  epicMiddleware.run(RootEpic);
  return { store, persistor };
};
export default configureStore;
