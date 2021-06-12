import React from "react";
import Loading from './loading'
import { Redirect, Route } from "react-router-dom";


const AdminRoute = ({ children, ...rest }) => {
  const token  = localStorage.getItem('token')
  if(!token){
    return <Loading/>
  }
  return <Route {...rest} render={() => children} />
};
export default AdminRoute;
