/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Headers/Navbar";
import hero from "../assets/hero.png";
import HomeCards from "../components/cards/HomeCards";
import PositionCard from "../components/cards/PositionCard";
import TopJobsCard from "../components/cards/TopJobsCard";
import WhatWeOffer from "../components/misc/WhatWeOffer";
import EmailUs from "../components/misc/EmailUs";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/slice/jobSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const jobs = useSelector((state) => state.job.jobs);
  const dispatch = useDispatch();

  console.log(jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-left-side">
            <h1 className="hero-text">
              Find Digital <span style={{ color: "#0056b3" }}>Internships</span>{" "}
              and <br></br>
              <span style={{ color: "#0056b3" }}>Fulltime</span> Jobs now with
              <br></br>JobComet
            </h1>
            <p>
              JobComet is your one stop centre for thousands<br></br>
              of Internships and Fulltime Jobs.
            </p>
            <Link to="/jobs" className="hero-btn">
              Explore Jobs
            </Link>
          </div>
          <div className="hero-right-side">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
      <HomeCards />
      <PositionCard />
      <TopJobsCard jobs={jobs} />
      <WhatWeOffer />
      <EmailUs />
    </>
  );
};

export default Home;
