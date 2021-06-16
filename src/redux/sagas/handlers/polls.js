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
    const response = yield call(axiosCall, "get", `/list_polls`);
    if (response) {
      yield put(showPoll(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handlePollById(action) {
  try {
    const response = yield call(
      axiosCall,
      "get",
      `/list_poll?id=${action.payload.id}`
    );
    if (response) {
      yield put(createPoll(response.data, action.payload));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleDeletePoll(action) {
  try {
    const response = yield call(
      axiosCall,
      "post",
      `delete_poll?id=${action.payload.id}`
    );
    if (response) {
      yield put(createPoll(response.data, action.payload));
    }
  } catch (e) {
    console.log(e);
  }
}
