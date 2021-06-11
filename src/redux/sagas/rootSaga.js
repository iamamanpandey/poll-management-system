import { takeLatest } from "redux-saga/effects";
import { handleRegisterUser, handleloginUser} from "./handlers/user";
import { LOGIN, SIGNUP } from "../constants/actionTypes";

export function* watcherSaga() {
  yield takeLatest(LOGIN, handleloginUser);
  yield takeLatest(SIGNUP, handleRegisterUser);
}

