import React from "react";
import { Link } from 'react-router-dom';

export default function sidebar() {
     
  return (
    <div>
      <div class="sidebar">
        <Link class="active" to="/admin/dashboard">Home</Link>
        <Link to="/admin/userlist">users</Link>
        <Link to="/admin/create">Create</Link>
        <Link to="/login" onClick={()=>localStorage.clear()}>LogOut</Link>
      </div>
    </div>
  );
}
