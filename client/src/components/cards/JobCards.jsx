/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import building from "../../assets/office-building.png";
import { getFirstLine } from "../../utils/utils";

const JobCards = ({ jobs }) => {
  return (
    <div className="job-card-container">
      {jobs.map((item) => (
        <div className="job-cards" key={item._id}>
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
              ${item.annualSalaryMax == "" ? 50000 : item.annualSalaryMax}/year
            </div>
            <div className="top-jobs-capsule-2">{item.jobGeo}</div>
          </div>
          <div className="job-button">
            <button className="apply-now">Apply Now</button>
            <button className="view-details">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCards;
