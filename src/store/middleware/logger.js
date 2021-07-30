import React from "react";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("dispatching: ", action);
  const result = next(action);
  console.log("next state: ", store.getState());
  // @ts-ignore
  console.groupEnd(action.type);
  return result;
};

export default logger;
