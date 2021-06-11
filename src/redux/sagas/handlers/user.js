import { call, put } from "redux-saga/effects";
import { axiosCall } from "../requests/user";
import { loginSuccess } from "../../actions";

export function* handleloginUser(action) {
  console.log(action, "action");
  try {
    const response = yield call(
      axiosCall,
      "get",
      `/login?username=${action.payload.name}&password=${action.payload.password}`
    );
    if (response) {
      yield put(loginSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handlelSignUpUser(action) {
  console.log(action, "action");
  try {
    const response = yield call(
      axiosCall,
      "get",
      `/login?username=${action.payload.name}&password=${action.payload.password}`
    );
    if (response) {
      yield put(loginSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}
