import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../redux/actions";
import { useHistory } from "react-router-dom";
import Nav from "../Nav";
import { toast } from "react-toastify";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("Guest");
  const dispatch = useDispatch();
  const classes = useStyles();

  let history = useHistory();

  const token = localStorage.getItem("token", token);

  const {
    isSuccess,
    isloading,
    isError,
    userStatus = "",
  } = useSelector((state) => state.signupUser);

  useEffect(() => {
    if (isSuccess && !isError) {
      history.push("/login");
      dispatch(dispatch({ type: "SIGNUP_DEFAULT" }));
      toast.error(`signup successfull`);
    } else if (isError) {
      toast.error(`${userStatus.message}`);
      dispatch(dispatch({ type: "SIGNUP_DEFAULT" }));
      setName("");
      setPassword("");
      setrole("Guest");
    }
  }, [isError, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) return alert("empty fields");
    const data = { name, password, role };

    dispatch(signupRequest(data));
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
             Sign Up
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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-role-native-simple">
                Role
              </InputLabel>
              <Select
                native
                label="role"
                inputProps={{
                  name: "role",
                  id: "outlined-age-native-simple",
                }}
                onChange={(e) => setrole(e.target.value)}
                value={role}
              >
                <option value="Guest">Guest</option>
                <option value="Admin">Admin</option>
              </Select>
            </FormControl>
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

export default Register;
