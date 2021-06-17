import { GET_POLL_BY_ID ,
  ADD_OPTION_SUCCESS,
  DELETE_OPTION_SUCCESS,
  DELETE_POLL_SUCCESS,
  EDIT_TITLE_SUCCESS,} from "../constants/actionTypes";

const initialState = {
  singlePoll: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POLL_BY_ID:
      return { ...state, singlePoll: action.payload };
      case DELETE_POLL_SUCCESS:
        return { ...state,singlePoll: action.payload };
      case ADD_OPTION_SUCCESS:
        return { ...state, singlePoll:action.payload };
      case DELETE_OPTION_SUCCESS:
        return { ...state };
      case EDIT_TITLE_SUCCESS:
        return { ...state, data: action.payload };
    default:
      return state;
  }
};
