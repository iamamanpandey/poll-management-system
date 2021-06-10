import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="mb-4">
      <nav class="navbar navbar-expand-lg navbar-light border ">
        <div className="d-flex mx-auto">
          <Link class="navbar-brand " to="/">
            Navbar
          </Link>
          <Link class="nav-item nav-link" to="/login">
            Login
          </Link>
          <Link class="nav-item nav-link" to="/register">
            Register
          </Link>
        </div>
      </nav>
   
    </div>
  );
};
export default Nav;
