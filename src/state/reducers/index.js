import { combineReducers } from "redux";
import { userReducer } from "./accountReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
