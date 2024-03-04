/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavbarGlobal from "../components/Headers/NavbarGlobal";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import login from "../assets/login.svg";
import axios from "axios";
import { setLogin } from "../redux/slice/authSlice";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginAdmin = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/admin/auth/login",
        { email, password },
        config
      );

      const loggedIn = result.data;

      console.log(result);

      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
      }

      navigate("/adminDashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavbarGlobal />
      <div className="login-container">
        <div className="login">
          <div className="login-img">
            <img src={login} alt="" />
          </div>
          <div className="form-container">
            <h3>Login</h3>
            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="send-otp">
              <button className="send-otp-btn" onClick={loginAdmin}>
                Login As Admin
              </button>
            </div>
            <div className="signup-link">
              Don't have an account? <Link to="/adminSignup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
