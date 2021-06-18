import React from "react";
import {  Route } from "react-router-dom";

const AdminRoute = ({ children, ...rest }) => {

    return <Route {...rest} render={() => children} />;
  
};
export default AdminRoute;
