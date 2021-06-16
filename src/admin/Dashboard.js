import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { showPoll } from "../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const poll = useSelector((state) => state.poll);

  useEffect(() => {
    dispatch(showPoll());
  }, []);


  return (
    <div>
      <Sidebar />
      <h1 style={{ marginLeft: "20%" }}>Hello,index</h1>

      {/* {poll.data.data.map((x)=><h1>{x.title}</h1>)} */}

      {/* <table>
        {!poll ? (
          <p>Loading.....</p>
        ) : (
          poll.data.map((user) => (
            <tr key={user.id}>
              <td>Name: {user.title}</td>
            </tr>
          ))
        )}
      </table> */}

      {/* <div class="d-flex justify-content-center row">
        <div class="col-md-10 col-lg-10">
          <div class="border">
            <div class="question bg-white p-3 border-bottom">
              <div class="d-flex flex-row justify-content-between align-items-center mcq">
                <h4>MCQ Quiz</h4>
                <span>(5 of 20)</span>
              </div>
            </div>
            <div class="question bg-white p-3 border-bottom">
              <div class="d-flex flex-row align-items-center question-title">
                <h3 class="text-danger">Q.</h3>
                <h5 class="mt-1 ml-2">
                  Which of the following country has largest population?
                </h5>
              </div>
              <div class="ans ml-2">
                <label class="radio">
                  <input type="radio" name="brazil" value="brazil" />{" "}
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
                  <input type="radio" name="Indonesia" value="Indonesia" />{" "}
                  <span>Indonesia</span>
                </label>
              </div>
              <div class="ans ml-2">
                <label class="radio">
                  <input type="radio" name="Russia" value="Russia " />{" "}
                  <span>Russia</span>
                </label>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
              <button
                class="btn btn-primary d-flex align-items-center btn-danger"
                type="button">
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
        </div>
      </div>
    */}
    </div>
  );
};

export default Dashboard;
