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
    console.log("response", response);
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
    const response = yield call(axiosCall, "get", `/ist_polls`);
    console.log("response.data", response.data);
    if (response) {
      yield put(showPoll(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}
