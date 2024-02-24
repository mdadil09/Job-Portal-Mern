/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { getFirstLine } from "../../utils/utils";
import building from "../../assets/office-building.png";
import { Link } from "react-router-dom";

const Card = ({ jobs }) => {
  const {
    _id,
    companyName,
    jobGeo,
    jobTitle,
    jobExcerpt,
    jobLevel,
    jobType,
    annualSalaryMax,
  } = jobs;
  return (
    <div className="job-cards">
      <div className="top-jobs-logo">
        <img src={building} alt="" />
        <div className="top-jobs-log-text">
          <h3>{companyName}</h3>
          <p>{jobGeo}</p>
        </div>
      </div>
      <div className="top-jobs-title">
        <h3>{jobTitle}</h3>
        <p>{getFirstLine(jobExcerpt)}</p>
      </div>
      <div className="top-jobs-capsule">
        <div className="top-jobs-capsule-1">{jobLevel}</div>
        <div className="top-jobs-capsule-2">{jobType}</div>
        <div className="top-jobs-capsule-3">
          {annualSalaryMax == ""
            ? "Not Disclosed"
            : "$" + annualSalaryMax + "/year"}
        </div>
        <div className="top-jobs-capsule-2">{jobGeo}</div>
      </div>
      <div className="job-button">
        <Link to={`/apply/${_id}`} className="apply-now">
          Apply Now
        </Link>
        <Link to={`/singlejob/${_id}`} className="view-details">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
