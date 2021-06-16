import React from "react";
import {  Route } from "react-router-dom";

const AdminRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Route {...rest} render={() => children} />;
  }
};
export default AdminRoute;
