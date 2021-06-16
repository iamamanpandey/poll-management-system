import React from "react";
import {  Route } from "react-router-dom";
import Loading from "./loading";

const AdminRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Route {...rest} render={() => children} />;
  }else{
    return <Loading/>
  }
};
export default AdminRoute;
