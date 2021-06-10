import React, { useState } from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";

import { SignUp } from "../redux/ducks/user";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, password, role };
    dispatch(SignUp(data));
  };

  return (
    <div>
      <h1 className="text-center">Register js</h1>
      <form className="w-25 mx-auto" onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            class="form-select my-3"
            aria-label="Default select example"
            onChange={(e) => setrole(e.target.value)}
            value={role}
          >
            <option selected>User</option>
            <option value="1">Admin</option>
          </select>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Register;
