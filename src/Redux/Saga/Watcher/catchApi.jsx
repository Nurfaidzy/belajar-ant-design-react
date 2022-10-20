import { takeEvery } from "redux-saga/effects";
import { CATCH_API } from "../../Action/getApiAction";
import catchApiHandler from "./../Handler/catchApiHandler";

function* catchApi() {
  yield takeEvery(CATCH_API, catchApiHandler);
}

export default catchApi;
