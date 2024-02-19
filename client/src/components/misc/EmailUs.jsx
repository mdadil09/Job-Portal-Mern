/* eslint-disable no-unused-vars */
import React from "react";
import emailMan from "../../assets/emaiUs.png";
import email from "../../assets/email.png";

const EmailUs = () => {
  return (
    <div className="email-us-container">
      <div className="email-us">
        <div className="email-us-left">
          <h1>Get Latest Job Updates</h1>
          <p>
            Looking for your next career opportunity? Sign up below to receive
            email notifications<br></br> whenever we have new job openings
            available.
          </p>
          <div className="email-input">
            <img
              src={email}
              alt=""
              style={{ height: "20px", marginLeft: "8px" }}
            />
            <input type="email" placeholder="Enter Your Email" />
            <button className="email-us-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="email-us-right">
        <img src={emailMan} alt="" />
      </div>
    </div>
  );
};

export default EmailUs;
