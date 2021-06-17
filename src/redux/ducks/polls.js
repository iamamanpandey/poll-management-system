import {
  ADD_OPTION_SUCCESS,
  CREATE_POLL_SUCCESS,
  DELETE_OPTION_SUCCESS,
  DELETE_POLL_SUCCESS,
  EDIT_TITLE_SUCCESS,
  GET_POLL_BY_ID,
  SHOW_POLL_SUCCESS,
} from "../constants/actionTypes";

const initialState = {
  data: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POLL_SUCCESS:
      return { ...state, data: action.payload };
    case SHOW_POLL_SUCCESS:
      return { ...state, data: action.payload };
    case GET_POLL_BY_ID:
      return { ...state, data: action.payload };
    case DELETE_POLL_SUCCESS:
      return { ...state };
    case ADD_OPTION_SUCCESS:
      return { ...state, data: action.payload };
      case DELETE_OPTION_SUCCESS:
        return { ...state, data: action.payload };
      case EDIT_TITLE_SUCCESS:
        return { ...state, data: action.payload };
    default:
      return state;
  }
};
