import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";

const UserList = () => {
  const [users, setusers] = useState();

  useEffect(() => {
    axios
      .get("https://secure-refuge-14993.herokuapp.com/list_users")
      .then((results) => results.json())
      .then((res) => {
        console.log(res);
        setusers(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="mx-auto  w-75">
        <h1 style={{ marginLeft: "20%" }}> </h1>

        {/* {!users ? 'Loadin.......' :  users.data.map(user => (
            <div key={user.id}>
              <p>Name: {user.role}</p>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default UserList;
