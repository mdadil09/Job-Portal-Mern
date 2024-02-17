/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Headers/Navbar";
import hero from "../assets/hero.png";
import HomeCards from "../components/cards/HomeCards";
import PositionCard from "../components/cards/PositionCard";
import axios from "axios";
import TopJobsCard from "../components/cards/TopJobsCard";
import Footer from "../components/footer/Footer";
import WhatWeOffer from "../components/misc/WhatWeOffer";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  console.log(jobs);

  const fetchJobs = async () => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };

      const result = await axios.get("http://127.0.0.1:5700/api/jobs/", config);
      setJobs(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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
            <button className="hero-btn">Explore Jobs</button>
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
      <Footer />
    </>
  );
};

export default Home;
