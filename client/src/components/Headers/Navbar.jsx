/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-side">
        <div className="logo">
          <p>JobComet</p>
        </div>
      </div>
      <div className="right-side">
        <Link className="lgn-btn" to="/login">
          Log In
        </Link>
        <Link className="sig-btn" to="/signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
