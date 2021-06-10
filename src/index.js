import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './state/reducers/index';
import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';



const store = createStore(rootReducer,composeWithDevTools())

ReactDOM.render(
 <Provider store={store}>  
 <BrowserRouter>
    <App  />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

