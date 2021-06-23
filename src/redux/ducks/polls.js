import {
  CREATE_POLL_SUCCESS,
  DELETE_POLL_REQ,
  DELETE_POLL_SUCCESS,
  SHOW_POLL_REQUEST,
  SHOW_POLL_SUCCESS,
} from "../constants/actionTypes";

const initialState = {
  data: [],
  isloadingPoll: false,
  isloadingdeletePoll: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POLL_SUCCESS:
      return { ...state };
      
    case SHOW_POLL_REQUEST:
      return { ...state, isloadingPoll: true };

    case SHOW_POLL_SUCCESS:
      return { ...state, data: action.payload, isloadingPoll: false };

    case DELETE_POLL_REQ:
      return { ...state, isloadingdeletePoll: true };
    case DELETE_POLL_SUCCESS:
      return { ...state, isloadingdeletePoll: false };
    default:
      return state;
  }
};
