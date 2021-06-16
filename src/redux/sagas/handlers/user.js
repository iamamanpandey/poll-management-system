import { call, put } from "redux-saga/effects";
import { axiosCall } from "../requests/user";
import {setlistUsers} from '../../ducks/userList'
import { loginSuccess,signupSuccess } from "../../actions";

export function* handleloginUser(action) {
  try {
    const response = yield call(
      axiosCall,
      "get",
      `/login?username=${action.payload.name}&password=${action.payload.password}`
    );
    if (response) {
      yield put(loginSuccess(response.data, action.payload));
      localStorage.setItem('token', response.data.token);
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
      "post",
      `/add_user?username=${action.payload.name}&password=${action.payload.password}&password=${action.payload.role}`
    );
    if (response) {
      yield put(signupSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handlelistUsers(action) {
  try {
    const response = yield call(
      axiosCall,
      "get",
      `/list_users`
    );
    if (response) {
      yield put(setlistUsers(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}
