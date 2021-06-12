import { takeLatest } from "redux-saga/effects";
import {  handleloginUser, handlelSignUpUser} from "./handlers/user";
import {  LOGIN_REQUEST ,SIGNUP_REQUEST} from "../constants/actionTypes";

export function* watcherSaga() {
  yield takeLatest(SIGNUP_REQUEST, handlelSignUpUser);
  yield takeLatest(LOGIN_REQUEST, handleloginUser);
}

