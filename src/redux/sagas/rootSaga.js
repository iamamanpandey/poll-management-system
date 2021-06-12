import { takeLatest } from "redux-saga/effects";
import {  handleloginUser, handlelSignUpUser, handlelistUsers} from "./handlers/user";
import {   LOGIN_REQUEST ,SIGNUP_REQUEST} from "../constants/actionTypes";
import {GET_LIST_USERS} from '../ducks/userList';

export function* watcherSaga() {
  yield takeLatest(SIGNUP_REQUEST, handlelSignUpUser);
  yield takeLatest(LOGIN_REQUEST, handleloginUser);
  yield takeLatest(GET_LIST_USERS, handlelistUsers);
}

