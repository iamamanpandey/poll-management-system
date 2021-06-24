import React from "react";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token", token);

  if (token) {
    return <Route {...rest} render={() => children} />;
  } else {
    return <Redirect to="/login"/>
  }
};
export default AdminRoute;
