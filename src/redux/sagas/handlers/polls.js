import { call, put } from "redux-saga/effects";
import { axiosCall } from "../requests/user";
import { showPollSuccess, createPollSuccess, getPollById } from "../../actions";

export function* handleCreatePoll(action) {
  try {
    // add_poll?title=first%20polll&options=opt1____opt2____opt3____opt4
    const response = yield call(
      axiosCall,
      "post",
      `/add_poll?title=${action.payload.title}&options=${action.payload.options.opt1}____${action.payload.options.opt2}____${action.payload.options.opt3}`
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

// export function* handleDeletePoll(action) {
//   try {
//     const response = yield call(
//       axiosCall,
//       "post",
//       `delete_poll?id=${action.payload.id}`
//     );
//     if (response) {
//       yield put(createPoll(response.data, action.payload));
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
