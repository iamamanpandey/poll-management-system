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
import { toast } from "react-toastify";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UserList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("https://secure-refuge-14993.herokuapp.com/list_users")
      .then((res) => {
        setusers(res.data);
      })
      .catch(function (error) {
       toast.error(`${error.message}`)
      });
  }, []);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  return (
    <div>
      <Sidebar />
      {!users.data ? (
        <LinearProgress color="secondary" />
      ) : (
        <TableContainer component={Paper} className="w-50 mx-auto my-4">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>index</TableCell>
                <TableCell>id</TableCell>
                <TableCell>username</TableCell>
                <TableCell>password</TableCell>
                <TableCell>role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.data &&
                users.data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, index) => (
                    <TableRow key={user._id}>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>{user._id}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.password}</TableCell>
                      <TableCell>{user.role}</TableCell>
                    </TableRow>
                  ))}
                  
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </div>
  );
};

export default UserList;
