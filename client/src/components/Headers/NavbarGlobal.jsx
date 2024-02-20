/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const NavbarGlobal = () => {
  return (
    <div className="navbar-global">
      <div className="left-side">
        <div className="logo">
          <p>
            <span style={{ color: "#0056b3" }}>Job</span>
            <span style={{ color: "#fc6A03" }}>Comet</span>
          </p>
        </div>
      </div>
      <div className="right-side">
        {/* <Link className="normal-btn" to="/">
          Explore Jobs
        </Link> */}
        <Link className="lgn-btn" to="/login">
          Log In
        </Link>
        <Link className="sig-btn" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavbarGlobal;
