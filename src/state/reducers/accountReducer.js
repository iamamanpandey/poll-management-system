
const initialState = {
  user: null
}

export const  userReducer =(state = initialState, action)=> {
  switch (action.type) {
    case "LOGGED":
      return action.payload

    case "LOGOUT":
      return  action.payload

    default:
      return state;
  }
}
