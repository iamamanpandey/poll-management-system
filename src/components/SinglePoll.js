import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reqPollById,
  deletePollReq,
  deleteOptionReq,
  addVoteReq,
  editTitleReq,
  addOptionReq,
} from "../redux/actions";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const SinglePost = (props) => {
  const [loading, setloading] = useState(false);
  const [title, settitle] = useState(false);
  const [text, settext] = useState(" ");
  const [options, setoptions] = useState({ value: " ", status: false });
  const dispatch = useDispatch();
  const history = useHistory();
  const poll = useSelector((state) => state.singlePoll.singlePoll);

  useEffect(() => {
    dispatch(reqPollById(props.match.params.id));
  }, []);

  const edittitle = () => {
    settitle(true);
    settext(poll.data.title);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    const data = { id, text };
    dispatch(editTitleReq(data));
    settitle(false);
  };

  const addVote = ({ id, text }) => {
    setloading(true);
    dispatch(addVoteReq({ id, text }));
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  const deleteConfirm = (id) => {
    let answer = window.confirm("Are  you sure want to delete this poll");
    if (answer) {
      dispatch(deletePollReq(id));
    }
    history.push("/");
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    const { value } = options;
    const data = { id, value };

    dispatch(addOptionReq(data));
    setoptions({ status: false });
    toast.success("new Option has been added!!");
  };

  return (
    <div>
      <div className="container pb-5">
        <br />
        <h1 className="text-center">Poll Details</h1>
        {!poll.data ? (
          <div className="text-center my-4">
            <span class="spinner-border spinner-border-lg mx-auto"></span>
          </div>
        ) : (
          <div class="border m-4 shadow">
            <div class="question bg-white p-3 ">
              <div class="d-flex flex-row justify-content-between align-items-center question-title  border-bottom">
                {!title ? (
                  <h5 class="mt-1 ml-2">{poll.data.title}</h5>
                ) : (
                  <div className="w-100">
                    <form onSubmit={handleUpdateTitle}>
                      <input
                        type="text"
                        class="form-control"
                        value={text}
                        onChange={(e) => settext(e.target.value)}
                      />
                    </form>
                  </div>
                )}
                {!title ? (
                  <button
                    class="btn btn-link border-success align-items-center"
                    type="button"
                    onClick={edittitle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="black"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>
                ) : null}
              </div>
            </div>
            {poll.data.options.map((option, i) => (
              <div className=" text-center" key={i}>
                <label class="btn btn-outline-success w-50 ">
                  {option.option}
                  <div className="float-right ">
                    <button
                      class="btn btn-success mr-2 "
                      type="button"
                      onClick={() =>
                        addVote({
                          id: poll.data._id,
                          text: option.option,
                        })
                      }
                    >
                      <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;
                      {loading && (
                        <span class="spinner-border spinner-border-sm "></span>
                      )}
                      {!loading && <span>vote-{option.vote}</span>}
                    </button>

                    <button
                      className="btn btn-link"
                      onClick={() => {
                        dispatch(
                          deleteOptionReq({
                            id: poll.data._id,
                            text: option.option,
                          })
                        );
                        toast.success("option deleted!!");
                      }}
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
                </label>
              </div>
            ))}
            <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
              <button
                class="btn btn-link "
                type="button"
                onClick={() => deleteConfirm(poll.data._id)}
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
              {options.status === true ? (
                <div className="w-25">
                  <form onSubmit={handleAddOption}>
                    <input
                      type="text"
                      class="form-control"
                      value={options.value}
                      onChange={(e) =>
                        setoptions({ ...options, value: e.target.value })
                      }
                    />
                    <button
                      class="btn btn-link border-success align-items-center"
                      type="button"
                      onClick={() => setoptions({ status: false })}
                    >
                      cancel
                    </button>
                  </form>
                </div>
              ) : (
                <button
                  class="btn btn-link border-success align-items-center "
                  type="button"
                  onClick={() => setoptions({ status: true })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="black"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SinglePost;
