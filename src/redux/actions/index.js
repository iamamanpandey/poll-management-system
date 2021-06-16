import {  LOGIN_REQUEST, LOGIN_SUCCESS ,SIGNUP_REQUEST,SIGNUP_SUCCESS,  CREATE_POLL, SHOW_POLL} from "../constants/actionTypes";


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

//polls


export const createPoll = (payload) => ({
  type: CREATE_POLL,
  payload,
})

export const showPoll = (payload) => ({
  type: SHOW_POLL,
  payload,
});