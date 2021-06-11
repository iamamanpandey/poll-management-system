import { takeLatest } from "redux-saga/effects";
import {  handleloginUser} from "./handlers/user";
import {  LOGIN_REQUEST } from "../constants/actionTypes";

export function* watcherSaga() {
  yield takeLatest(LOGIN_REQUEST, handleloginUser);
}

