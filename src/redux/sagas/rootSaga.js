import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { LOGIN } from "../ducks/user";

export function* watcherSaga() {
  yield takeLatest(LOGIN, handleGetUser);
}
