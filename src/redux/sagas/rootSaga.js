import { takeLatest } from "redux-saga/effects";
import {  handleloginUser, handlelSignUpUser} from "./handlers/user";
import {  LOGIN_REQUEST ,SIGNUP_REQUEST, CREATE_POLL_REQUEST, SHOW_POLL_REQUEST, REQ_POLL_BY_ID, DELETE_POLL_REQ,} from "../constants/actionTypes";
import { handleCreatePoll, handleShowPoll,handlePollById, handleDeletePoll } from "./handlers/polls";

export function* watcherSaga() {
  yield takeLatest(SIGNUP_REQUEST, handlelSignUpUser);
  yield takeLatest(LOGIN_REQUEST, handleloginUser);

  yield takeLatest(CREATE_POLL_REQUEST, handleCreatePoll);
  yield takeLatest(SHOW_POLL_REQUEST, handleShowPoll);

  yield takeLatest(REQ_POLL_BY_ID, handlePollById);
  yield takeLatest(DELETE_POLL_REQ, handleDeletePoll);


}

