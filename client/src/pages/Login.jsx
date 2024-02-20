/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import NavbarGlobal from "../components/Headers/NavbarGlobal";
import login from "../assets/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [otpEmail, setOTPEmail] = useState();
  const [shiftOtp, setShiftOtp] = useState(false);

  const handleSendOTP = async () => {
    try {
      setEmail();
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
      console.log(result);
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
              <h3>Enter Otp Sent to {otpEmail}</h3>
            ) : (
              <h3>Login</h3>
            )}
            {shiftOtp === true ? (
              <div className="input-group">
                <label>OTP</label>
                <input type="text" placeholder="Enter otp sent to your email" />
              </div>
            ) : (
              <>
                <div className="input-group">
                  <label>Email</label>
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input type="Password" placeholder="Enter your password" />
                </div>
              </>
            )}
            {shiftOtp === true ? (
              <div className="send-otp">
                <button className="send-otp-btn">Verify OTP</button>
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
