import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import tasks from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import tasksReducer from "./reducers";
import reportWebVitals from "reportWebVitals";
import createSagaMiddleware from "redux-saga";
import rootSaga from "sagas";



const rootReducer = (state = {}, action) => {
  return { tasks: tasksReducer(state.tasks, action) };
};

const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();