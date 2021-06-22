import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";

const UserList = () => {
  const [users, setusers] = useState();

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
      <div className="mx-auto  w-75">
        <h1 className="text-center mb-4">All Polls </h1>

        <table class="table w-75" style={{ marginLeft: "20%" }}>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {!users ? (
              <div className="text-center mx-auto">
                <span class="spinner-border spinner-border-lg mx-auto"></span>
              </div>
            ) : (
              users.data.map((user) => {
                return (
                  <tr key={user._id}>
                    <th scope="row">{user._id}</th>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.role}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
