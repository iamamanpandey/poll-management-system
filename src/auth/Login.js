import React, { useState } from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import {  loginRequest } from "../redux/actions/index";

const Login = () => {
  const [name, setname] = useState();
  const [password, setpassword] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, password };
    dispatch(loginRequest(data));
  };

  return (
    <div>
      <h1 className="text-center">Login js</h1>
      <form className="w-25 mx-auto" onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            class="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
