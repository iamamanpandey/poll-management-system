export const GET_LIST_USERS = "GET_LIST_USERS";
export const SET_LIST_USERS = "SET_LIST_USERS";

export const getlistUsers = () => ({
  type: GET_LIST_USERS
});

export const setlistUsers = (payload) => ({
  type: SET_LIST_USERS,
  payload
});

const initialState = {
  user: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case SET_LIST_USERS:
      return { ...state, data };
    default:
      return state;
  }
};
