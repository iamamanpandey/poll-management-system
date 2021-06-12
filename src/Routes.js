import React from "react";
import "./App.css";
import {  Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AdminRoute from "./PrivateRoutes/adminRoutes";
import Home from "./Home";
import UserList from "./admin/UserList";
import Create from "./admin/Create";
import Dashboard from "./admin/Dashboard";


function Routes() {
  return (
    <div className="App ">
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <AdminRoute exact path="/admin/dashboard" component={Dashboard} />
        <AdminRoute exact path="/admin/userlist" component={UserList} />
        <AdminRoute exact path="/admin/create" component={Create} />

      </Switch>
    </div>
  );
}

export default Routes;
