export const LOGIN = "login";
const SIGNUP = "SignUp";
const LogOut  = "LogOut"

export const login = () => ({
  type: LOGIN
});

export const SignUp = (user) => ({
  type: SIGNUP,
  user
});



const initialState = {
  user: undefined
};




// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
        return action.payload;
      case SIGNUP:
        return action.payload;
    default:
      return state;
  }
};
