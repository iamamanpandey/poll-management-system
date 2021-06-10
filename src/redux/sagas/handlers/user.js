import { call, put } from "redux-saga/effects";
import { LOGIN } from "../../ducks/user";
import { loginUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(loginUser);
    console.log(data)
    const { data } = response;
     yield put(LOGIN(data));
  } catch (error) {
    console.log(error);
  }
}