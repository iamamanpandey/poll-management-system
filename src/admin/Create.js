import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Button from "../components/Button";
import {useDispatch} from 'react-redux';
import { createPoll } from "../redux/actions";

const Create = () => {
  const [title, settitle] = useState("");
  const [options, setoptions] = useState({
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
  });

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Optstios", options);
    const   data ={title, options }
    console.log('data', data)
    dispatch(createPoll(data))
    
  };

  return (
    <div>
      <Sidebar />

      <h1 style={{ marginLeft: "20%" }}>Hello,create</h1>
      <div class="container mt-5">
        <form className="w-25 mx-auto" onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter username"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label>options</label>
            <input
              class="form-control"
              name="opt1"
              placeholder="Password"
              value={options.opt1}
              onChange={(e) => setoptions({ ...options, opt1: e.target.value })}
            />
            <input
              class="form-control"
              name="opt2"
              placeholder="Password"
              value={options.opt2}
              onChange={(e) => setoptions({ ...options, opt2: e.target.value })}
            />
            <input
              class="form-control"
              name="opt3"
              placeholder="Password"
              value={options.opt3}
              onChange={(e) => setoptions({ ...options, opt3: e.target.value })}
            />
            <input
              class="form-control"
              name="opt4"
              placeholder="Password"
              value={options.opt4}
              onChange={(e) => setoptions({ ...options, opt4: e.target.value })}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Create;
