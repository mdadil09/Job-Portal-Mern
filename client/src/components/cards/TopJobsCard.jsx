/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import building from "../../assets/office-building.png";
import { getFirstLine } from "../../utils/utils";

const TopJobsCard = ({ jobs }) => {
  const topJobs = jobs
    .filter((item) => item.annualSalaryMax >= 100000)
    .slice(0, 6);

  console.log(topJobs);

  return (
    <div className="top-jobs-container">
      <div className="top-jobs-upper">
        <div className="top-jobs-text">
          <h1>
            <span style={{ color: "#0056b3" }}>Latest And Top</span> Job
            Openings
          </h1>
          <p>
            Discover the fresh job openings from the giant firms in which you
            might want to apply<br></br>and take a chance to get hired by top
            fortune companies
          </p>
        </div>
        <div className="top-jobs-btn">
          <Link to="/jobs">View All Jobs</Link>
        </div>
      </div>
      <div className="top-jobs-card-main">
        {topJobs.map((item) => (
          <div className="top-job-cards" key={item._id}>
            <div className="top-jobs-logo">
              <img src={building} alt="" />
              <div className="top-jobs-log-text">
                <h3>{item.companyName}</h3>
                <p>{item.jobGeo}</p>
              </div>
            </div>
            <div className="top-jobs-title">
              <h3>{item.jobTitle}</h3>
              <p>{getFirstLine(item.jobExcerpt)}</p>
            </div>
            <div className="top-jobs-capsule">
              <div className="top-jobs-capsule-1">{item.jobLevel}</div>
              <div className="top-jobs-capsule-2">{item.jobType}</div>
              <div className="top-jobs-capsule-3">
                ${item.annualSalaryMax}/year
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopJobsCard;
