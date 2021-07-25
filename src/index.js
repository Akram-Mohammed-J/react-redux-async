import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducer } from "./Reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
// const reverseAtTen = (store) => (next) => (action) => {
//   if (store.getState() >= 10) {
//     return next({ type: "SUBTRACT" });
//   } else {
//     return next(action);
//   }
// };
const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
