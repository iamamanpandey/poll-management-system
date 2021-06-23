import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/actions/index";
import { useHistory } from "react-router-dom";
import Nav from "../Nav";
import { toast } from "react-toastify";

const Login = () => {
  const [name, setname] = useState();
  const [password, setpassword] = useState();

  const dispatch = useDispatch();
  let history = useHistory();

  const token = localStorage.getItem("token", token);

  const {
    isSuccess,
    isloading,
    isError,
    user = {},
    userStatus = "",
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (isSuccess && token) {
      history.push("/");
    } else if (isError) {
      alert(userStatus);
    }
  }, [isSuccess, isError]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, password };
    if (!name || !password) return alert("empty fields");
    await dispatch(loginRequest(data));
  };

  return (
    <div>
      <Nav />
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
            type="password"
            class="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <Button type="submit">
          {isloading === false ? <span>SUBMIT</span> : <span>loading...</span>}
        </Button>
      </form>
    </div>
  );
};

export default Login;
