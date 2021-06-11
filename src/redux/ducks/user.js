import { LOGIN_SUCCESS } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  const data = action.payload;
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, data };
    default:
      return state;
  }
};
