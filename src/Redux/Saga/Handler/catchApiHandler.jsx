import axios from "axios";
import { put } from "redux-saga/effects";
import { GET_API } from "../../Action/getApiAction";

function* catchApiHandler() {
  try {
    const res = yield axios.get("https://fakestoreapi.com/carts");
    const send = res.data;
    yield put({ type: GET_API, payload: send });
  } catch (error) {
    console.log(error);
  }
}

export default catchApiHandler;
