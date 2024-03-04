/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavbarGlobal from "../components/Headers/NavbarGlobal";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import signup from "../assets/signup.svg";
import axios from "axios";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("file", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/admin/auth/register",
        formData,
        config
      );

      navigate("/adminSignin");
    } catch (error) {
      console.log(error);
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
            <h3>Sign Up</h3>
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
              <label>Role</label>
              <input
                type="text"
                placeholder="admin"
                name="Role"
                value={role}
                readOnly
              />
            </div>
            <div className="input-group">
              <input
                type="file"
                name="picturePath"
                onChange={(e) => setFile(e.target.files[0])}
              />{" "}
            </div>
            <div className="send-otp">
              <button className="send-otp-btn" onClick={handleRegister}>
                Sign Up
              </button>
            </div>
            <div className="signup-link">
              Don't have an account? <Link to="/adminSignin">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
