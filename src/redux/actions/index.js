import {LOGIN, SIGNUP,LOGOUT} from '../constants/actionTypes';

export const login = (payload) => ({
    type: LOGIN,
    payload
  });
  
  export const SignUp = () => ({
    type: SIGNUP,
  });
  
  export const logout = () => ({
      type: LOGOUT
    });
    
  