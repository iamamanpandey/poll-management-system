import React from "react";
import Button from "../components/Button";
import Input from '../components/Input'
const Login = () => {
  return (
    <div>
      <h1 className="text-center">Login js</h1>

      <form className="w-25 mx-auto">
        <div class="form-group">
          <label>Username</label>
          <Input
            type="text"
            class="form-control"
            placeholder="Enter username"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <Input  class="form-control" placeholder="Password" />

          <select class="form-select my-3" aria-label="Default select example">
            <option selected>User</option>
            <option value="1">Admin</option>
          </select>
        </div>

        <Button type="submit" >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
