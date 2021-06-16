import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  CREATE_POLL_REQUEST,
  SHOW_POLL_REQUEST,
  SHOW_POLL_ERROR,
  SHOW_POLL_SUCCESS,
  CREATE_POLL_ERROR,
  CREATE_POLL_SUCCESS,
} from "../constants/actionTypes";

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const signupRequest = (payload) => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const signupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

//createPoll
export const createPollRequest = (payload) => ({
  type: CREATE_POLL_REQUEST,
  payload,
});

export const createPollError = (payload) => ({
  type: CREATE_POLL_ERROR,
  payload,
});
export const createPollSuccess = (payload) => ({
  type: CREATE_POLL_SUCCESS,
  payload,
});


//show poll
export const showPollRequest = () => ({
  type: SHOW_POLL_REQUEST,
});

export const showPollSuccess = (payload) => ({
  type: SHOW_POLL_SUCCESS,
  payload
});

export const showPollErrror = () => ({
  type: SHOW_POLL_ERROR,
});

