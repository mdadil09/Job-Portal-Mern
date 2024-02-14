/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [otpEmail, setOTPEmail] = useState(email);

  const handleSendOTP = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/user/send-otp",
        { email },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(result));
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
    <div className="login-container">
      <div className="form-container">
        <label>Enter Your Email</label>
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSendOTP}>Send OTP</button>
        <label>Enter Your OTP</label>
        <input
          type="text"
          placeholder="Enter Your OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
        <button onClick={verifyOTP}>Verify OTP</button>
      </div>
    </div>
  );
};

export default Login;
