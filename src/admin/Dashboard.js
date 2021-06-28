import React, { useEffect, useState } from "react";
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
import Pagination from "@material-ui/lab/Pagination";

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
      toast.success("Poll has been deleted!");
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [count, setcount] = useState(0);
  const rowsPerPage = 4;

  const begin = (currentPage - 1) * rowsPerPage;
  const end = begin + rowsPerPage;

  useEffect(() => {
    if (poll.data.data) {
      const data = Math.ceil(poll.data.data.length / 4);
      setcount(data);
    }
  }, [poll.data]);
  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  return (
    <div>
      {poll.isloadingPoll === true ? (
        <LinearProgress color="secondary" />
      ) : (
          <div>
            <h1 className="m-4 text-center">All Polls </h1>
            <Container>
              <Grid container spacing={2}>
                {!poll.data.data ? (
                  <LinearProgress color="secondary" />
                ) : (
                    poll.data.data.slice(begin, end).map((user) => (
                      <Grid item xs={12} sm={12} md={6} lg={6} key={user._id}>
                        <Card elevation={1} variant="outlined">
                          <CardHeader title={user.title} />
                          <Divider />
                          <CardContent>
                            <Typography variant="body2" color="textSecondary">
                              <List>
                                {user.options.map((item, i) => (
                                  <ListItem key={i} alignItems="flex-start">
                                    <ListItemText>
                                      {i + 1} - {item.option}
                                    </ListItemText>
                                  </ListItem>
                                ))}
                              </List>
                            </Typography>
                            <Divider />
                            <div
                              className="d-flex justify-content-between"
                              style={{ marginBottom: "-3%" }}
                            >
                              <Link to={`/admin/polls/${user._id}`}>
                                <Chip
                                  style={{ marginTop: "15%" }}
                                  icon={<FaceIcon />}
                                  label="View Poll"
                                  clickable
                                  color="primary"
                                />
                              </Link>

                              <IconButton style={{ color: "red" }}>
                                <DeleteOutlined
                                  onClick={() => deleteConfirm(user._id)}
                                  fontSize="large"
                                />
                              </IconButton>
                            </div>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  )}
              </Grid>
            </Container>
            <div className="my-4 d-flex  justify-content-center ">
              <Pagination
                color="secondary"
                variant="outlined"
                size="large"
                count={count}
                page={currentPage}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
    </div>
  );
};
export default Dashboard;
