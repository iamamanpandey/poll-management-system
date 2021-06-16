import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { showPollRequest } from "../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const poll = useSelector((state) => state.poll.data);

  useEffect(() => {
    dispatch(showPollRequest());
  }, []);

  console.log("poll data", poll.data);

  return (
    <div>
      <Sidebar />
      <h1 style={{ marginLeft: "20%" }}>Hello,polls</h1>

      <div class="d-flex justify-content-center row w-50 mx-auto">
        <div class="col-md-10 col-lg-10">
          {poll &&
            poll.data &&
            poll.data.map((user) => (
              <div class="border m-4 shadow">
                <div class="question bg-white p-3 ">
                  <div class="d-flex flex-row justify-content-between align-items-center question-title  border-bottom" >
                    <h5 class="mt-1 ml-2">
                    {user.title}
                    </h5>
                  </div>
                  <div class="ans ml-2">
                    <label class="radio">
                      <input type="radio" name="brazil" value="brazil" />
                      <span>Brazil</span>
                    </label>
                  </div>
                  <div class="ans ml-2">
                    <label class="radio">
                      <input type="radio" name="Germany" value="Germany" />
                      <span>Germany</span>
                    </label>
                  </div>
                  <div class="ans ml-2">
                    <label class="radio">
                      <input type="radio" name="Indonesia" value="Indonesia" />
                      <span>Indonesia</span>
                    </label>
                  </div>
                  <div class="ans ml-2">
                    <label class="radio">
                      <input type="radio" name="Russia" value="Russia " />
                      <span>Russia</span>
                    </label>
                  </div>
                </div>
                <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                  <button
                    class="btn btn-primary d-flex align-items-center btn-danger"
                    type="button"
                  >
                    <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous
                  </button>
                  <button
                    class="btn btn-primary border-success align-items-center btn-success"
                    type="button"
                  >
                    Next<i class="fa fa-angle-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
