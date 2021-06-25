import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reqPollById,
  deletePollReq,
  deleteOptionReq,
  addVoteReq,
  editTitleReq,
  addOptionReq,
} from "../redux/actions";
import {
  Divider,
  CardHeader,
  ListItem,
  List,
  IconButton,
  CardContent,
  Grid,
  Card,
  Typography,
  Button,
} from "@material-ui/core";

import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import LinearProgress from "@material-ui/core/LinearProgress";
import PersistentDrawerLeft from "./Drawer";
const SinglePost = (props) => {
  const [title, settitle] = useState(false);
  const [text, settext] = useState(" ");
  const [options, setoptions] = useState({ value: " ", status: false });
  const dispatch = useDispatch();
  const history = useHistory();
  const poll = useSelector((state) => state.singlePoll);

  useEffect(() => {
    dispatch(reqPollById(props.match.params.id));
  }, []);

  const edittitle = () => {
    settitle(true);
    settext(poll.singlePoll.data.title);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    const data = { id, text };
    dispatch(editTitleReq(data));
    toast.success("new Title is updating!!");
    settitle(false);
  };

  const addVote = ({ id, text }) => {
    dispatch(addVoteReq({ id, text }));
    toast.success(`you have succesfully voted to ${text}`);
  };

  const deleteConfirm = (id) => {
    let answer = window.confirm("Are  you sure want to delete this poll");
    if (answer) {
      dispatch(deletePollReq(id));
      history.push("/");
    }
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    const { value } = options;
    const data = { id, value };
    dispatch(addOptionReq(data));
    setoptions({ status: false });
    toast.success(`new Option ${value} has been added!`);
  };

  return (
    <div>
      <PersistentDrawerLeft />
      {poll.isloadingSinglePoll === true ? (
        <div className="text-center my-3">
          <LinearProgress color="secondary" />
        </div>
      ) : (
        <div className="container pb-5 ">
          <br />
          <h1 className="text-center">Poll Details</h1>
          {!poll.singlePoll.data ? (
            <Grid container spacing={2}>
              <LinearProgress color="secondary" />
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card elevation={1} variant="outlined">
                  {!title ? (
                    <CardHeader
                      title={poll.singlePoll.data.title}
                      action={
                        <IconButton onClick={edittitle}>
                          <EditIcon fontSize="large" />
                        </IconButton>
                      }
                    />
                  ) : (
                    <form onSubmit={handleUpdateTitle}>
                      <input
                        type="text"
                        class="form-control p-4"
                        value={text}
                        onChange={(e) => settext(e.target.value)}
                      />
                    </form>
                  )}
                  <Divider />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      <List>
                        {poll.singlePoll.data.options.map((item, i) => (
                          <container>
                            <ListItem key={i} alignItems="flex-start">
                              <ListItemText variant="h1">
                                {i + 1} - {item.option}
                              </ListItemText>
                              <Button
                                variant="outlined"
                                color="primary"
                                onClick={() =>
                                  addVote({
                                    id: poll.singlePoll.data._id,
                                    text: item.option,
                                  })
                                }
                              >
                                {" "}
                                vote - {item.vote}
                              </Button>
                              <IconButton
                                style={{ marginTop: "-1%" }}
                                color="secondary"
                                onClick={() => {
                                  dispatch(
                                    deleteOptionReq({
                                      id: poll.singlePoll.data._id,
                                      text: item.option,
                                    })
                                  );
                                  toast.success(
                                    `${item.option} option deleted!!`
                                  );
                                }}
                              >
                                <DeleteIcon fontSize="large" />
                              </IconButton>
                            </ListItem>
                          </container>
                        ))}

                        {options.status === true ? (
                          <div className="w-25">
                            <form onSubmit={handleAddOption}>
                              <input
                                type="text"
                                class="form-control"
                                value={options.value}
                                onChange={(e) =>
                                  setoptions({
                                    ...options,
                                    value: e.target.value,
                                  })
                                }
                              />
                            </form>
                          </div>
                        ) : null}
                      </List>
                    </Typography>
                    <Divider />
                    <div class="d-flex flex-row justify-content-between  pr-3 ">
                      <IconButton
                        color="secondary"
                        onClick={() => deleteConfirm(poll.singlePoll.data._id)}
                      >
                        <DeleteIcon fontSize="large" />
                      </IconButton>

                      {options.status === true ? (
                        <div className="w-25">
                          <IconButton
                            onClick={() => setoptions({ status: false })}
                          >
                            <CancelIcon fontSize="large" />
                          </IconButton>
                          <IconButton onClick={handleAddOption}>
                            <AddIcon fontSize="large" />
                          </IconButton>
                        </div>
                      ) : (
                        <IconButton
                          onClick={() => setoptions({ status: true })}
                        >
                          <AddIcon fontSize="large" />
                        </IconButton>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </div>
      )}
    </div>
  );
};
export default SinglePost;
