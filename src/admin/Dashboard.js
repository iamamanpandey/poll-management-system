import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { reqPollById, showPollRequest } from "../redux/actions";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();

  const poll = useSelector((state) => state.poll.data);

  useEffect(() => {
    dispatch(showPollRequest());
  }, [dispatch]);

  return (
    <div>
      <Sidebar />
      <h1 style={{ marginLeft: "20%" }}>Hello,polls </h1>

      <div class="d-flex justify-content-center row w-50 mx-auto">
        <div class="col-md-10 col-lg-10">
          {!poll.data ? (
            <h3>Loading.....</h3>
          ) : (
            poll.data.map((user) => (
              <div class="border m-4 shadow">
                <div class="question bg-white p-3 ">
                  <div class="d-flex flex-row justify-content-between align-items-center question-title  border-bottom">
                    <h5 class="mt-1 ml-2">{user.title}</h5>
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
                  <Link to={`/admin/polls/${user._id}`}>
                    <button
                      class="btn btn-primary border-success align-items-center btn-success"
                      type="button"
                      onClick={() => dispatch(reqPollById(user._id))}
                    >
                      SEE MORE <i class="fa fa-angle-right ml-2"></i>
                    </button>
                  </Link>
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
