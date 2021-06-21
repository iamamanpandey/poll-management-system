import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { createPollRequest } from "../redux/actions";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, settitle] = useState("");
  const history = useHistory();
  const [options, setoptions] = useState({
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, options };
    if (!title || !options.opt1|| !options.opt2|| !options.opt3|| !options.opt4) return alert("empty fields");
    if (options.opt1=== options.opt2 ||options.opt1===options.opt3||options.opt1===options.opt4 ||
      options.opt2 ===options.opt3 ||  options.opt2 ===options.opt4 ||options.opt3===options.opt4
      ) return alert("options value are");


    console.log("data", data);
    dispatch(createPollRequest(data));
    settitle(" ");
    history.push("/");
  };

  return (
    <div>
      <Sidebar />

      <h1 className="text-center ">Create Poll</h1>
      <div class="container mt-5 ">
        <div className="w-50 mx-auto shadow p-4 border">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label className="labl">Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </div>
            <div className=" d-flex justify-content-between ">
              <div class="form-group  mr-2">
                <label className="labl">Option 1</label>
                <input
                  class="form-control"
                  name="opt1"
                  value={options.opt1}
                  onChange={(e) =>
                    setoptions({ ...options, opt1: e.target.value })
                  }
                />
              </div>
              <div class="form-group ">
                <label className="labl">Option 2</label>
                <input
                  class="form-control"
                  name="opt2"
                  value={options.opt2}
                  onChange={(e) =>
                    setoptions({ ...options, opt2: e.target.value })
                  }
                />
              </div>
            </div>
            <div className=" d-flex justify-content-between ">
              <div class="form-group mr-2">
                <label className="labl">Option 3</label>
                <input
                  class="form-control"
                  name="opt3"
                  value={options.opt3}
                  onChange={(e) =>
                    setoptions({ ...options, opt3: e.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <label className="labl">Option 4</label>
                <input
                  class="form-control"
                  name="opt4"
                  value={options.opt4}
                  onChange={(e) =>
                    setoptions({ ...options, opt4: e.target.value })
                  }
                />
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
