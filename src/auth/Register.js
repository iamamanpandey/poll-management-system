import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { signupRequest } from "../redux/actions";
import { useHistory } from "react-router-dom";
import Nav from "../Nav";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("Guest");
  const dispatch = useDispatch();

  let history = useHistory();

  const token = localStorage.getItem("token", token);

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) return alert("empty fields");
    const data = { name, password, role };

    dispatch(signupRequest(data));

    history.push("/login");
  };

  return (
    <div>
      <Nav />
      <h1 className="text-center">Register js</h1>
      <form className="w-25 mx-auto" onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            class="form-control"
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
            <option value="Guest"> Guest </option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Register;
