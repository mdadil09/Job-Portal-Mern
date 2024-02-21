/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarGlobal = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="navbar-global">
      <Link to="/" className="logo">
        <p>
          <span style={{ color: "#0056b3" }}>Job</span>
          <span style={{ color: "#fc6A03" }}>Comet</span>
        </p>
      </Link>
      <div
        className={`hamburger-menu ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div style={{ display: "flex" }}>
        <ul className={`right-side ${menuActive ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link className="lgn-btn" to="/admin">
              Post Your Job
            </Link>
          </li>
        </ul>
        <div className="visible-side">
          <Link className="sig-btn" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarGlobal;
