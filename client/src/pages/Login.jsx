/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import NavbarGlobal from "../components/Headers/NavbarGlobal";
import login from "../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [password, setPassword] = useState("");
  const [shiftOtp, setShiftOtp] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/user/send-otp",
        { email, password },
        config
      );

      setShiftOtp(true);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOTP = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/user/verify-otp",
        { email, otp },
        config
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
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
            {shiftOtp === true ? (
              <p>
                Enter Otp Sent to{" "}
                <span style={{ color: "grey", fontSize: "18px" }}>{email}</span>
              </p>
            ) : (
              <h3>Login</h3>
            )}
            {shiftOtp === true ? (
              <div className="input-group">
                <label>OTP</label>
                <input
                  type="text"
                  placeholder="Enter otp sent to your email"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
              </div>
            ) : (
              <>
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
              </>
            )}
            {shiftOtp === true ? (
              <div className="send-otp">
                <button className="send-otp-btn" onClick={verifyOTP}>
                  Verify OTP
                </button>
              </div>
            ) : (
              <>
                <div className="send-otp">
                  <button className="send-otp-btn" onClick={handleSendOTP}>
                    Send OTP
                  </button>
                </div>
                <div className="signup-link">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
