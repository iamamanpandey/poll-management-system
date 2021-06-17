import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { editTitleReq } from "../redux/actions";

const UpdateTitle = (props) => {
  const [value, setvalue] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    const data = { id, value };
    dispatch(editTitleReq(data));
    setvalue(" ");
    history.push(`/admin/polls/${id}`);
  };

  return (
    <div className="w-50 mx-auto my-4">
      <form onSubmit={handleSubmit}>
        <label>Add Option</label>
        <input
          type="text"
          class="form-control "
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default UpdateTitle;
