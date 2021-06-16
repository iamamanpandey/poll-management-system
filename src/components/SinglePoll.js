import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPollById } from "../redux/actions";

const SinglePost = (props) => {
  const dispatch = useDispatch();
  const poll = useSelector(state => state.poll)

  console.log("Props", poll);
  useEffect(() => {
    dispatch(getPollById());
  }, [dispatch]);
  
  return (
    <div>
      <div className="container pb-5">
        <br />
        <h1>hello, singlepost</h1>
        {/* <h1>{poll.title}</h1>
        <p>{new Date(post.createdAt).toLocaleDateString()}</p> */}
      </div>
    </div>
  );
};
export default SinglePost;
