import {
  GET_POLL_BY_ID,
  ADD_OPTION_SUCCESS,
  DELETE_OPTION_SUCCESS,
  EDIT_TITLE_SUCCESS,
  EDIT_TITLE_REQ,
  DELETE_OPTION_REQ,
  ADD_OPTION_REQ,
  REQ_POLL_BY_ID
} from "../constants/actionTypes";

const initialState = {
  singlePoll: [],
  isloadingAddOption: false,
  isloadingtitle: false,
  isloadingSinglePoll:false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case REQ_POLL_BY_ID:
      return { ...state,  isloadingSinglePoll:true, };
    case GET_POLL_BY_ID:
      return { ...state, singlePoll: action.payload , isloadingSinglePoll:false,};
   

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
