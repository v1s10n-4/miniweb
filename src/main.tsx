import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import DevTools from "./utils/DevTools/ReduxDevTools";

const store = await configureStore();
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <DevTools />
  </Provider>,
  document.getElementById("root")
);
