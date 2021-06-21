import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { showPollRequest, deletePollReq } from "../redux/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  const poll = useSelector((state) => state.poll.data);

  useEffect(() => {
    dispatch(showPollRequest());
  }, [dispatch]);

  const deleteConfirm = (id) => {
    let answer = window.confirm("Are  you sure want to delete this poll");
    if (answer) {
      dispatch(deletePollReq(id));
    }
    toast.success("Poll has been deleted!");
  };

  return (
    <div>
      <Sidebar />
      <h1 className="text-center">All Polls </h1>

      <div class="d-flex justify-content-center row w-50 mx-auto">
        <div class="col-md-10 col-lg-10">
          {!poll.data ? (
            <div className="text-center my-4">
              <span class="spinner-border spinner-border-lg mx-auto"></span>
            </div>
          ) : (
            poll.data.map((user) => (
              <div class="border m-4 shadow">
                <div class="question bg-white p-3 ">
                  <div class="d-flex flex-row justify-content-between align-items-center question-title  border-bottom mb-4">
                    <h5 class="mt-1 ml-2">{user.title}</h5>
                  </div>
                  {user.options.map((item) => (
                    <div class="text-center">
                      <label class="btn btn-outline-success w-50 ">
                        {item.option}
                      </label>
                    </div>
                  ))}
                </div>
                <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                  <Link to={`/admin/polls/${user._id}`}>
                    <button
                      class="btn btn-primary border-success align-items-center btn-success"
                      type="button"
                    >
                      View Poll <i class="fa fa-angle-right ml-2"></i>
                    </button>
                  </Link>
                  <button
                    class="btn btn-primary d-flex align-items-center btn-danger"
                    type="button"
                    onClick={() => deleteConfirm(user._id)}
                  >
                    <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
