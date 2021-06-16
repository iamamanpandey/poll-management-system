import { CREATE_POLL, SHOW_POLL } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  const data = action.payload;
  switch (action.type) {
    case CREATE_POLL:
      return { ...state, data };
    case SHOW_POLL:
      return { ...state, data };
    default:
      return state;
  }
};
