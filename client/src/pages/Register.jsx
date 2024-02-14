/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [otp, setOTP] = useState("");
  const [otpEmail, setOTPEmail] = useState(email);
  const [picturePath, setPicturePath] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handlePicturePathChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    console.log(reader);
    reader.onloadend = () => {
      setPicturePath(reader.result);
      setFileName(file.name);
      setSelectedFile(file);
    };
    reader.readAsDataURL(file);
  };

  const handleSendOTP = async () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    if (picturePath) {
      formData.append("picture", selectedFile);
    }
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
        <label>Enter Your Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter Your Email</label>
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="file"
          name="picturePath"
          onChange={handlePicturePathChange}
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

export default Register;
