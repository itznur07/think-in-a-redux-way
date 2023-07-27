import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log("Action", JSON.stringify(action));



  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
