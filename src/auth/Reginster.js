import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <h1 className="text-center">Register js</h1>
      <form className="w-25 mx-auto" onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Username</label>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <Input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select class="form-select my-3" aria-label="Default select example">
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
