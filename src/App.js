import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import {  Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Reginster";
import Home from "./Home";


function App() {
  return (
    <div className="App ">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
