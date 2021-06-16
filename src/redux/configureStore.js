import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./ducks/user";
import { watcherSaga } from "./sagas/rootSaga";
import { composeWithDevTools } from 'redux-devtools-extension';
import userList from "./ducks/userList";
import pollreducer from "./ducks/polls";


const reducer = combineReducers({
  user: userReducer,
  poll:pollreducer,
  userList:userList
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSaga);

export default store;
