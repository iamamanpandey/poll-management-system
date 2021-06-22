import React from "react";
import "./App.css";
import {  Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AdminRoute from "./PrivateRoutes/adminRoutes";
import UserList from "./admin/UserList";
import Create from "./admin/Create";
import Dashboard from "./admin/Dashboard";
import SinglePost from "./components/SinglePoll";



function Routes() {
  return (
    <div className="App ">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <AdminRoute exact path="/" component={Dashboard} />
        <AdminRoute exact path="/admin/userlist" component={UserList} />
        <AdminRoute exact path="/admin/create" component={Create} />
        <AdminRoute exact path="/admin/polls/:id" component={SinglePost} />
      </Switch>
    </div>
  );
}

export default Routes;
