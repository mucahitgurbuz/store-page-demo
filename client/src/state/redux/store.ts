import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const store = createStore(
  rootReducer,{},
  applyMiddleware(thunk, promise) as any
);

export default store;
