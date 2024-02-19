/* eslint-disable no-unused-vars */
import React from "react";
import careerCounselling from "../../assets/careerCounselling.jpg";
import jobRecom from "../../assets/jobRecom.jpg";
import createBuild from "../../assets/createBuild.jpg";

const WhatWeOffer = () => {
  return (
    <div className="with-offer-container">
      <div className="with-offer-container-text">
        <h1>What We Offer</h1>
        <p>
          Job Portal is the right platform for you to get various job
          recommendations,<br></br>get career counselling and get your ideal job
          profile
        </p>
      </div>
      <div className="with-offer-card">
        <div className="offer-beach" style={{ marginRight: "15px" }}>
          <img src={jobRecom} alt="" />
          <div className="offer-beach-text">
            <h1>01</h1>
            <div className="verticalLine"></div>
            <h2>Job Recommendations</h2>
          </div>
        </div>
        <div className="offer-beach" style={{ marginRight: "15px" }}>
          <img src={createBuild} alt="" />
          <div className="offer-beach-text">
            <h1>02</h1>
            <div className="verticalLine"></div>
            <h2>Create & Build Profile</h2>
          </div>
        </div>
        <div className="offer-beach">
          <img src={careerCounselling} alt="" />
          <div className="offer-beach-text">
            <h1>03</h1>
            <div className="verticalLine"></div>
            <h2>Career Counselling</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
