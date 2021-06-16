import { CREATE_POLL_SUCCESS,  SHOW_POLL_SUCCESS } from "../constants/actionTypes";

const initialState ={
   data:[]
} 

// eslint-disable-next-line import/no-anonymous-default-export
export default (state =initialState, action) => {
 
  switch (action.type) {

    case CREATE_POLL_SUCCESS:
      return { ...state, data:action.payload };

   case SHOW_POLL_SUCCESS:
     return {...state, data:action.payload }
    default:
      return state;
  }
};
