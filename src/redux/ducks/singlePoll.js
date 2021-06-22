import {
  GET_POLL_BY_ID,
  ADD_OPTION_SUCCESS,
  DELETE_OPTION_SUCCESS,
  DELETE_POLL_SUCCESS,
  EDIT_TITLE_SUCCESS,
  DELETE_POLL_REQ,
  DELETE_POLL_ERROR
} from "../constants/actionTypes";

const initialState = {
  singlePoll: [],
  isloadingDelete:false,
  isSuccessDelete:false,
  isErrorDelete:false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POLL_BY_ID:
      return { ...state, singlePoll: action.payload };
    case DELETE_POLL_SUCCESS:
      return { ...state, singlePoll: action.payload };

      case DELETE_POLL_REQ:
        return { ...state, isloadingDelete:true};
  
      case DELETE_POLL_ERROR:
          return { ...state,isloadingDelete:false };
      
    case ADD_OPTION_SUCCESS:
      return { ...state,isloadingDelete:false };

    case DELETE_OPTION_SUCCESS:
      return { ...state };

    case EDIT_TITLE_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
