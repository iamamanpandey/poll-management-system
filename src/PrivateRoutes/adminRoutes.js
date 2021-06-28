import React from "react";
import { Redirect, Route } from "react-router-dom";
import Drawer from '../components/Drawer'
import { makeStyles, useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },


  hide: {
    display: "none",
  },


  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const AdminRoute = ({ children, ...rest }) => {
  const classes = useStyles();
  const token = localStorage.getItem("token", token);

  if (token) {
    return (
      <div className={classes.content}>
        <div className={classes.content}>
          <Drawer />
          <Route {...rest} render={() => children} />
        </div>
      </div>
    )
  } else {
    return <Redirect to="/login" />
  }
};
export default AdminRoute;
