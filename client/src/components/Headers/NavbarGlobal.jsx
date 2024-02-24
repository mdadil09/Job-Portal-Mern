/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userImage from "../../assets/user.png";
import { setLogout } from "../../redux/slice/authSlice";

const NavbarGlobal = () => {
  const [menuActive, setMenuActive] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    dispatch(
      setLogout({
        user: null,
        token: null,
      })
    );
  };

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul className={`right-side ${menuActive ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>

          <li>
            <Link className="lgn-btn" to="/admin">
              Post Your Job
            </Link>
          </li>
        </ul>
        <div className="visible-side">
          {user ? (
            <div>
              <img
                src={`http://localhost:5700/assets/${user.image}`}
                alt=""
                style={{ height: "32px" }}
                onClick={toggleMenu}
              />
              {isOpen && (
                <div
                  className="img-dropdown-menu"
                  style={{ listStyle: "none" }}
                >
                  <div>
                    <Link to="/dashboard">Dashboard</Link>
                  </div>
                  <div onClick={handleSignOut}>Sign Out</div>
                </div>
              )}
            </div>
          ) : (
            <Link className="sig-btn" to="/login">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarGlobal;
