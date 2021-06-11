import { call, put } from "redux-saga/effects";
import { login, SignUp } from "../../actions/index";

import { loginUser,signUpUser } from "../requests/user";


export function* handleloginUser(action) {
  try {
    const response = yield call(loginUser);
    const { data } = response;
    yield put({type:'LOGIN', payload:data});
  } catch (error) {
    console.log(error.message);
  }
}

export function* handleRegisterUser(action) {
  try {
    const response = yield call(signUpUser);
    const { data } = response;
     yield put(SignUp.types(data));
  } catch (error) {
    console.log(error);
  }
}