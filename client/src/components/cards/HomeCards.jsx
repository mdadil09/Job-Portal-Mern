/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import search from "../../assets/search.png";
import suitcase from "../../assets/suitcase.png";
import cv from "../../assets/cv.png";
import profile from "../../assets/profile.png";

const HomeCards = () => {
  return (
    <div className="home-card-container">
      <div className="home-card-container-text">
        <h1>
          Get Hired in{" "}
          <span style={{ color: "#0056b3" }}>4 Quick Easy Steps</span>
        </h1>
        <p>
          The Quickest and most efficient way to get hired by top firm working
          in your<br></br> career intrests areas
        </p>
      </div>
      <div className="home-card-main">
        <div className="home-card">
          <div className="home-card-icon">
            <img src={profile} alt="search" />
          </div>
          <div className="home-card-text">
            <h3>Create an account</h3>
            <p>
              Signup for the job applicant profile mention your
              qualification,past experiences andexpertise and scope of your
              interests. Vola!Your're all set to find your dream jobs.
            </p>
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-icon">
            <img src={search} alt="search" />
          </div>
          <div className="home-card-text">
            <h3>Search Job</h3>
            <p>
              Once you set your job hunting parameters, you'll find many
              openings related to your career interest on the explore jobs page
              and even filter out some of the best job openings.
            </p>
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-icon">
            <img src={cv} alt="search" />
          </div>
          <div className="home-card-text">
            <h3>Upload CV/Resume</h3>
            <p>
              From numerous job openings, shortlist the right match vaccancy to
              your profile and apply right after by uploading your CV/Resume and
              arranging a couple of questions, if any.
            </p>
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-icon">
            <img src={suitcase} alt="search" />
          </div>
          <div className="home-card-text">
            <h3>Get Job</h3>
            <p>
              After Applying, wait for some time,schedule an interview, and if
              everything gone right then get hired more quickly than traditional
              hiring methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
