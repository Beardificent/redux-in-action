import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import tasks from "./store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import tasksReducer from "./store/reducers";
import reportWebVitals from "reportWebVitals";
import logger from './store/middleware/logger'
import analytics from "store/middleware/analytics";
import apiMiddleware from "store/middleware/api";

const rootReducer = (state = {}, action) => {
  return { tasks: tasksReducer(state.tasks, action) };
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, apiMiddleware, logger, analytics)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();