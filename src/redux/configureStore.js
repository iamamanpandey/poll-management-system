import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./ducks/user";
import signupUserReducer from "./ducks/signup";
import { watcherSaga } from "./sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import pollreducer from "./ducks/polls";
import singlePollReducer from "./ducks/singlePoll";
import voteReducer from "./ducks/vote";

const reducer = combineReducers({
  user: userReducer,
  signupUser:signupUserReducer,
  poll: pollreducer,
  singlePoll: singlePollReducer,
  vote: voteReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
