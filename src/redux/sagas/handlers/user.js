import { call, put } from "redux-saga/effects";
import { login, SignUp } from "../../ducks/user";
import { loginUser,signUpUser } from "../requests/user";


export function* handleloginUser(action) {
  try {
    const response = yield call(loginUser);
    const { data } = response;
    yield put(login(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleRegisterUser(action) {
  try {
    const response = yield call(signUpUser);
    const { data } = response;
     yield put(SignUp(data));
  } catch (error) {
    console.log(error);
  }
}