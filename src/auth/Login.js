import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/actions/index";
import { useHistory } from "react-router-dom";
import Nav from "../Nav";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();

  const token = localStorage.getItem("token", token);

  const {
    isSuccess,
    isloading,
    isError,
    userStatus = "",
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (isSuccess && token) {
      history.push("/");
      toast.success(`login successfull`);
    } else if (isError) {
      toast.error(`${userStatus}`);
      dispatch({ type: "LOGIN_DEFAULT" });
      setname("");
      setpassword("");
    }
  }, [isSuccess, isError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, password };
    if (!name || !password) return alert("empty fields");
    await dispatch(loginRequest(data));
  };

  return (
    <div>
      <Nav />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isloading === false ? (
                <span>SUBMIT</span>
              ) : (
                <span>loading...</span>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
