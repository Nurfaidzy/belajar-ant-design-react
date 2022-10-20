import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import getApiReducer from "./Reducer/getApiReducer";

import storeSaga from "./Saga/storeSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  getApiReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(storeSaga);

export default store;
