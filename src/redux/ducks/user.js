export const LOGIN = "login";
export const SIGNUP = "SignUp";
const LOGOUT = "LogOut";


export const login = () => ({
  type: LOGIN,
});

export const SignUp = (user) => ({
  type: SIGNUP,
  user,
});

export const logout = (user) => ({
    type: LOGOUT
  });
  



// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    const response = action.response
  switch (action.type) {
    case LOGIN:
      return {...state, response};
    case SIGNUP:
      return {...state, response};
    default:
      return state;
  }
};
