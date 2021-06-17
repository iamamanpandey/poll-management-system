import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqPollById, deletePollReq, deleteOptionReq } from "../redux/actions";
import { Link } from "react-router-dom";
import Option from "./AddOption";

const SinglePost = (props) => {
  const dispatch = useDispatch();
  const poll = useSelector((state) => state.poll.data);

  console.log("Props", poll);
  useEffect(() => {
    dispatch(reqPollById(props.match.params.id));
  }, [dispatch]);

  const deleteConfirm = (id) => {
    let answer = window.confirm("Are  you sure want to delete the post");
    if (answer) {
      dispatch(deletePollReq(id));
    }
  };

  return (
    <div>
      <div className="container pb-5">
        <br />
        <h1>hello, singlepost{poll.error}</h1>
        {!poll.data ? (
          <p>Loadin....... </p>
        ) : (
          <div class="border m-4 shadow">
            <div class="question bg-white p-3 ">
              <div class="d-flex flex-row justify-content-between align-items-center question-title  border-bottom">
                <h5 class="mt-1 ml-2">{poll.data.title}</h5>
                <Link to={`/admin/polls/edittitle/${poll.data._id}`}>
                  <button
                    class="btn btn-primary border-success align-items-center btn-success"
                    type="button"
                    onClick={() => dispatch(reqPollById(poll.data._id))}
                  >
                    update Title <i class="fa fa-angle-right ml-2"></i>
                  </button>
                </Link>
              </div>
            </div>
            {poll.data.options.map((option) => (
              <div className=" text-center">
                <label class="btn btn-outline-success w-50 ">
                  {option.option}
                  <button
                    class="btn btn-primary  float-right btn-danger"
                    type="button"
                    onClick={() => dispatch(deleteOptionReq({id:poll.data._id,text:option.option}))}
                   >
                    <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Delete
                  </button>
                </label>
              </div>
            ))}
            <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
              <button
                class="btn btn-primary d-flex align-items-center btn-danger"
                type="button"
                onClick={() => deleteConfirm(poll.data._id)}
              >
                <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Delete
              </button>
              <Link to={`/admin/addoption/${poll.data._id}`}>
                <button
                  class="btn btn-primary border-success align-items-center btn-success"
                  type="button"
                  onClick={() => dispatch(reqPollById(poll.data._id))}
                >
                  add option <i class="fa fa-angle-right ml-2"></i>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SinglePost;
