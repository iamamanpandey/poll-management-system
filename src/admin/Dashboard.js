import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { showPollRequest, deletePollReq } from "../redux/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Divider,
  CardHeader,
  ListItem,
  List,
  IconButton,
  CardContent,
  Container,
  Grid,
  Card,
  Typography,
  Chip,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import FaceIcon from "@material-ui/icons/Face";
import ListItemText from "@material-ui/core/ListItemText";
import LinearProgress from "@material-ui/core/LinearProgress";
const Dashboard = () => {
  const dispatch = useDispatch();

  const poll = useSelector((state) => state.poll);
  useEffect(() => {
    dispatch(showPollRequest());
  }, [dispatch]);

  const deleteConfirm = (id) => {
    let answer = window.confirm("Are  you sure want to delete this poll");
    if (answer) {
      dispatch(deletePollReq(id));
    }
    toast.success("Poll has been deleted!");
  };

  return (
    <div >
      <Sidebar />

      {poll.isloadingPoll == true ? (
        <LinearProgress color="secondary" />
      ) : (
        <div>
          <h1 className="m-4">All Polls </h1>
          <div className="mx-4">
            {!poll.data.data ? (
              <LinearProgress color="secondary" />
            ) : (
              poll.data.data.map((user) => (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Card elevation={1} variant="outlined">
                      <CardHeader
                        title={user.title}
                        action={
                          <IconButton style={{ color: "red" }}>
                            <DeleteOutlined
                              onClick={() => deleteConfirm(user._id)}
                              fontSize="medium"
                            />
                          </IconButton>
                        }
                      />
                      <Divider />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary">
                          <List>
                            {user.options.map((item, i) => (
                              <ListItem button key={i} alignItems="flex-start">
                                <ListItemText>
                                  {i + 1} - {item.option}
                                </ListItemText>
                              </ListItem>
                            ))}
                          </List>
                        </Typography>
                        <Divider />

                        <Link to={`/admin/polls/${user._id}`}>
                          <Chip
                            style={{ marginBottom: "-3%" }}
                            icon={<FaceIcon />}
                            label="View Poll"
                            clickable
                            color="primary"
                          />
                        </Link>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
