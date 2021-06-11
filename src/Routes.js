import React from "react";
import "./App.css";
import Nav from "./Nav";
import {  Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Home";


function Routes() {
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

export default Routes;
