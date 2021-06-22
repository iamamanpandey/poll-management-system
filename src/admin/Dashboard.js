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
            poll.data.map((user) =>(
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
                    onClick={() => deleteConfirm(user._id)}
                    class="btn btn-link "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="red"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
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
