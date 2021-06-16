import { takeLatest } from "redux-saga/effects";
import {  handleloginUser, handlelSignUpUser, handlelistUsers} from "./handlers/user";
import {  SHOW_POLL, CREATE_POLL, LOGIN_REQUEST ,SIGNUP_REQUEST} from "../constants/actionTypes";

export function* watcherSaga() {
  yield takeLatest(SIGNUP_REQUEST, handlelSignUpUser);
  yield takeLatest(LOGIN_REQUEST, handleloginUser);
  yield takeLatest(CREATE_POLL, handlelistUsers);
  yield takeLatest(SHOW_POLL, handlelistUsers);

}

