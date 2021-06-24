import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { useDispatch } from "react-redux";
import { createPollRequest } from "../redux/actions";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CreateIcon from "@material-ui/icons/Create";
import { Button } from "@material-ui/core";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Create = () => {
  const [title, settitle] = useState("");
  const history = useHistory();
  const [options, setoptions] = useState({
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, options };
    if (
      !title ||
      !options.opt1 ||
      !options.opt2 ||
      !options.opt3 ||
      !options.opt4
    )
      return alert("empty fields");
    if (
      options.opt1 === options.opt2 ||
      options.opt1 === options.opt3 ||
      options.opt1 === options.opt4 ||
      options.opt2 === options.opt3 ||
      options.opt2 === options.opt4 ||
      options.opt3 === options.opt4
    )
      return alert("options value are same");

    dispatch(createPollRequest(data));
    settitle(" ");
    toast.success("new poll created");
    history.push("/");
  };

  return (
    <div>
      <Sidebar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Poll
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="title"
                  name="title"
                  autoComplete="title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="option1"
                  variant="outlined"
                  required
                  fullWidth
                  id="option1"
                  label="option 1"
                  autoFocus
                  value={options.opt1}
                  onChange={(e) =>
                    setoptions({ ...options, opt1: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="option2"
                  variant="outlined"
                  required
                  fullWidth
                  id="option2"
                  label="option 2"
                  autoFocus
                  value={options.opt2}
                  onChange={(e) =>
                    setoptions({ ...options, opt2: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="option3"
                  variant="outlined"
                  required
                  fullWidth
                  id="option1"
                  label="option 3"
                  autoFocus
                  value={options.opt3}
                  onChange={(e) =>
                    setoptions({ ...options, opt3: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="option1"
                  variant="outlined"
                  required
                  fullWidth
                  id="option1"
                  label="option 1"
                  autoFocus
                  value={options.opt4}
                  onChange={(e) =>
                    setoptions({ ...options, opt4: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Create;
