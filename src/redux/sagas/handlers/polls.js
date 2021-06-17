import { call, put } from "redux-saga/effects";
import { axiosCall } from "../requests/user";
import { showPollSuccess, createPollSuccess, getPollById, deletePollSuccess, addOptionSuccess, deleteOptionSuccess,editTitleSuccess } from "../../actions";

export function* handleCreatePoll(action) {
  try {
    const response = yield call(
      axiosCall,
      "post",
      `/add_poll?title=${action.payload.title}&options=${action.payload.options.opt1}____${action.payload.options.opt2}____${action.payload.options.opt3}____${action.payload.options.opt4}`
    );
    if (response) {
      yield put(createPollSuccess(response.data, action.payload));
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
    console.log('responseeee', response.data)
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
    if (response) {
      yield put(deletePollSuccess(response.data));
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
      `/delete_poll_option?id=${action.payload.id}&option_text=${action.payload.text}`);
    if (response) {
      yield put(deleteOptionSuccess(response.data));
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
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleEditTitle(action) {
  try {
    const response = yield call(
      axiosCall,
      "put",
      `/update_poll_title?id=${action.payload.id}&title=${action.payload.value}`
    );
    if (response) {
      yield put(editTitleSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* handleAddVote(action) {
  console.log("voteee", action)
  try {
    const response = yield call(
      axiosCall,
      "post",
      `/do_vote?id=${action.payload.id}&option_text=${action.payload.text}`,
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWEwMTgyYzU5NTI3ZmUwMDEyMzcwN2IyIiwiaWF0IjoxNTEwMDQ4NDY4LCJleHAiOjE1MTM2NDg0Njh9.DG93Hq-Fde9kNZbgnr34l2dZyeEYyJ0OfD_9yZK1JCQ'
    );
    if (response) {
      yield put(editTitleSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}





