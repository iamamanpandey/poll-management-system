import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_DEFAULT } from "../constants/actionTypes";

const initialState = {
  userSignup: {},
  isloading: false,
  isSuccess: false,
  isError: false
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const data = { ...action.payload };
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, isloading: true, isSuccess: false, isError: false };
    case SIGNUP_SUCCESS:
      return { ...state, user: data, isloading: false, isSuccess: true, isError: false };
    case SIGNUP_ERROR:
      return { ...state, userStatus: data, isloading: false, isSuccess: false, isError: true };
    case SIGNUP_DEFAULT:
      return { ...state, isloading: false, isSuccess: false, isError: false };
    default:
      return state;
  }
};
