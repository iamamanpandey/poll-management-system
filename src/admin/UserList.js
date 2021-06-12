import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getlistUsers } from "../redux/ducks/userList";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userList);

  console.log(users);
  useEffect(() => {
    dispatch(getlistUsers());
  }, [dispatch]);

  return (
    <div>
      <Sidebar />
      <div className="mx-auto  w-75">
        <h1 style={{ marginLeft: "20%" }}>Hello, users</h1>
      </div>
    </div>
  );
};

export default UserList;
