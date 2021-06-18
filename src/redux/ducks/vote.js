import { ADD_VOTE_SUCCESS } from "../constants/actionTypes";

const initialState = {
  vote: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_VOTE_SUCCESS:
      return { ...state, vote:action.payload };
    default:
      return state;
  }
};
