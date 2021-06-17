import { takeLatest } from "redux-saga/effects";
import { handleloginUser, handlelSignUpUser } from "./handlers/user";
import {
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  CREATE_POLL_REQUEST,
  SHOW_POLL_REQUEST,
  REQ_POLL_BY_ID,
  DELETE_POLL_REQ,
  ADD_OPTION_REQ,
  DELETE_OPTION_REQ,
  EDIT_TITLE_REQ,
} from "../constants/actionTypes";
import {
  handleCreatePoll,
  handleShowPoll,
  handlePollById,
  handleDeletePoll,
  handleAddOption,
  handleDeleteOption,
  handleEditTitle,
} from "./handlers/polls";

export function* watcherSaga() {
  yield takeLatest(SIGNUP_REQUEST, handlelSignUpUser);
  yield takeLatest(LOGIN_REQUEST, handleloginUser);

  yield takeLatest(CREATE_POLL_REQUEST, handleCreatePoll);
  yield takeLatest(SHOW_POLL_REQUEST, handleShowPoll);

  yield takeLatest(REQ_POLL_BY_ID, handlePollById);
  yield takeLatest(DELETE_POLL_REQ, handleDeletePoll);

  yield takeLatest(ADD_OPTION_REQ, handleAddOption);
  yield takeLatest(DELETE_OPTION_REQ, handleDeleteOption);

  yield takeLatest(EDIT_TITLE_REQ, handleEditTitle);
}
