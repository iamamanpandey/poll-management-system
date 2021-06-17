import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqPollById } from "../redux/actions";

const SinglePost = (props) => {
  const dispatch = useDispatch();
  const poll = useSelector((state) => state.poll.data);

  console.log("Props", poll.data);
  useEffect(() => {
    dispatch(reqPollById(props.match.params.id));
  }, [dispatch]);


  
  return (
    <div>
      <div className="container pb-5">
        <br />
        <h1>hello, singlepost</h1>

         <h1>{poll.title}</h1> 
      </div>
    </div>
  );
};
export default SinglePost;
