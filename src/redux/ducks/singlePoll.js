import {
  GET_POLL_BY_ID,
  ADD_OPTION_SUCCESS,
  DELETE_OPTION_SUCCESS,
  DELETE_POLL_SUCCESS,
  EDIT_TITLE_SUCCESS,
  DELETE_POLL_REQ,
  EDIT_TITLE_REQ,
  DELETE_OPTION_REQ,
  ADD_OPTION_REQ,
} from "../constants/actionTypes";

const initialState = {
  singlePoll: [],
  isloadingDeleteOption: false,
  isloadingAddOption: false,
  isloadingtitle: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POLL_BY_ID:
      return { ...state, singlePoll: action.payload };
    case DELETE_POLL_SUCCESS:
      return { ...state, singlePoll: action.payload };

    case DELETE_POLL_REQ:
      return { ...state };

    case ADD_OPTION_REQ:
      return { ...state, isloadingAddOption: true };

    case ADD_OPTION_SUCCESS:
      return { ...state, isloadingAddOption: false };

    case DELETE_OPTION_REQ:
      return { ...state, isloadingDeleteOption: true };

    case DELETE_OPTION_SUCCESS:
      return { ...state, isloadingDeleteOption: false };

    case EDIT_TITLE_REQ:
      return { ...state, isloadingtitle: true };
    case EDIT_TITLE_SUCCESS:
      return { ...state, data: action.payload, isloadingtitle: false };
    default:
      return state;
  }
};
