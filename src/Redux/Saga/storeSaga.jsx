import { all } from "redux-saga/effects";
import catchApi from "./Watcher/catchApi";

function* storeSaga() {
  yield all([catchApi()]);
}
export default storeSaga;
