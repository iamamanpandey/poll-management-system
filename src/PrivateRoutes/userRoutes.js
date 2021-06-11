import React from "react";

import { Redirect, Route } from "react-router-dom";


const UserRoute = ({ children, ...rest }) => {
  const token  = localStorage.getItem('token')
  console.log("tokenq2q3",token)
  if(!token){
    return <Redirect to="/"/>
  }
  return <Route {...rest} render={() => children} />
};
export default UserRoute;
