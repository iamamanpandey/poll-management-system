import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UserList = () => {
  const [users, setusers] = useState();
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("https://secure-refuge-14993.herokuapp.com/list_users")
      .then((res) => {
        console.log(res);
        setusers(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      {!users ? (
        <LinearProgress color="secondary" />
      ) : (
        <TableContainer component={Paper} className="w-50 mx-auto my-4">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>username</TableCell>
                <TableCell>password</TableCell>
                <TableCell>role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.data.map((row) => {
                return (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell>{row.username}</TableCell>

                    <TableCell>{row.password}</TableCell>
                    <TableCell>{row.role}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        
      />
        </TableContainer>
      )}
    </div>
  );
};

export default UserList;
