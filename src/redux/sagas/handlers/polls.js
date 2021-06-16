import { call, put } from "redux-saga/effects";
import { axiosCall } from "../requests/user";
import { showPoll, createPoll } from "../../actions";

export function* handleCreatePoll(action) {
  try {
    const response = yield call(
      axiosCall,
      "post",
      `add_poll?title=${action.payload.title}&options=${action.payload.options}`
    );
    if (response) {
      yield put(createPoll(response.data, action.payload));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleShowPoll(action) {
  console.log(action, "action");
  try {
    const response = yield call(
      axiosCall,
      "get",
      `/add_user?username=${action.payload.name}&password=${action.payload.password}&password=${action.payload.role}`
    );
    if (response) {
      yield put(showPoll(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}
