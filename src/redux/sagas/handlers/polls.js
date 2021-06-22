import { call, put } from "redux-saga/effects";
import { axiosCall } from "../requests/user";
import {
  showPollSuccess,
  createPollSuccess,
  getPollById,
  deletePollSuccess,
  addOptionSuccess,
  deleteOptionSuccess,
  editTitleSuccess,
  addVoteSuccess,
  reqPollById,
  showPollRequest,
} from "../../actions";

export function* handleCreatePoll(action) {
  try {
    const response = yield call(
      axiosCall,
      "post",
      `/add_poll?title=${action.payload.title}&options=${action.payload.options.opt1}____${action.payload.options.opt2}____${action.payload.options.opt3}____${action.payload.options.opt4}`
    );
    if (response) {
      yield put(createPollSuccess(response.data,action.payload));
      yield put(showPollRequest());
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleShowPoll(action) {
  try {
    const response = yield call(axiosCall, "get", `/list_polls`);
    if (response) {
      yield put(showPollSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handlePollById(action) {
  console.log("action by id ", action);

  try {
    const response = yield call(
      axiosCall,
      "get",
      `/list_poll?id=${action.payload}`
    );
    if (response) {
      yield put(getPollById(response.data, action.payload));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleDeletePoll(action) {
  try {
    const response = yield call(
      axiosCall,
      "delete",
      `/delete_poll?id=${action.payload}`
    );
    console.log("response", response);
    if (response) {
      yield put(deletePollSuccess(response.data));
      yield put(showPollRequest());
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleDeleteOption(action) {
  try {
    const response = yield call(
      axiosCall,
      "delete",
      `/delete_poll_option?id=${action.payload.id}&option_text=${action.payload.text}`
    );
    if (response) {
      yield put(deleteOptionSuccess(response.data));
      yield put(reqPollById(action.payload.id));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleAddOption(action) {
  try {
    const response = yield call(
      axiosCall,
      "put",
      `/add_new_option?id=${action.payload.id}&option_text=${action.payload.value}`
    );
    if (response) {
      yield put(addOptionSuccess(response.data));
      yield put(reqPollById(action.payload.id));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleEditTitle(action) {
  console.log(action.payload)
  try {
    const response = yield call(
      axiosCall,
      "put",
      `/update_poll_title?id=${action.payload.id}&title=${action.payload.text}`
    );
    if (response) {
      yield put(editTitleSuccess(response.data));
      yield put(reqPollById(action.payload.id));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleAddVote(action) {
  console.log("voteee", action);
  const token = localStorage.getItem("token");
  const headers = { access_token: token };
  try {
    const response = yield call(
      axiosCall,
      "post",
      `/do_vote?id=${action.payload.id}&option_text=${action.payload.text}`,
      {},
      headers
    );
    if (response) {
      yield put(addVoteSuccess(response.data));
      yield put(reqPollById(action.payload.id));
    }
  } catch (e) {
    console.log(e);
  }
}
