import React, { useState } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/actions/index";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [name, setname] = useState();
  const [password, setpassword] = useState();

  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, password };
    if (!name || !password) return alert("empty fields");
    dispatch(loginRequest(data));
    history.push("/user/dashboard");
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
