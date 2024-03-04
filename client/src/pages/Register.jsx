/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import NavbarGlobal from "../components/Headers/NavbarGlobal";
import signup from "../assets/signup.svg";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [otp, setOTP] = useState("");
  const [shiftOtp, setShiftOtp] = useState(false);
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();
  const navigate = useNavigate();

  console.log(file);

  const handleSendOTP = async () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/user/send-otp-register",
        formData,
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
          "Content-Type": "application/json",
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
          <div className="login-img-reg">
            <img src={signup} alt="" />
          </div>
          <div className="form-container">
            {shiftOtp === true ? (
              <h3>Enter Otp Sent to {email}</h3>
            ) : (
              <h3>Sign Up</h3>
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
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="Password"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="file"
                    name="picturePath"
                    onChange={(e) => setFile(e.target.files[0])}
                  />{" "}
                </div>
              </>
            )}
            {shiftOtp === true ? (
              <div className="send-otp">
                <button className="send-otp-btn" onClick={verifyOTP}>
                  Continue
                </button>
              </div>
            ) : (
              <>
                <div className="send-otp">
                  <button className="send-otp-btn" onClick={handleSendOTP}>
                    Sign Up
                  </button>
                </div>
                <div className="signup-link">
                  Don't have an account? <Link to="/login">Sign In</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
