/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";
import NavbarGlobal from "../Headers/NavbarGlobal";
import building from "../../assets/office-building.png";
import { Link } from "react-router-dom";

const SingleJob = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const [singleJob, setSingleJob] = useState([]);
  const [isDesc, setIsDesc] = useState(true);
  const [isEdu, setIsEdu] = useState(false);
  const [isTotalApp, setIsTotalApp] = useState(false);

  const fetchSingleJob = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.get(
        `http://localhost:5700/api/jobs/${id}`,
        config
      );

      setSingleJob(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (singleJob.jobDescription) {
      setApiText(singleJob.jobDescription.toString());
    }
    fetchSingleJob();
  }, [singleJob]);

  let {
    _id,
    companyName,
    jobGeo,
    jobTitle,
    jobExcerpt,
    jobLevel,
    jobType,
    annualSalaryMax,
    jobDescription,
    jobIndustry,
    jobSlug,
    salaryCurrency,
    annualSalaryMin,
    pubDate,
  } = singleJob;

  const [apiText, setApiText] = useState("");

  const handleDescClick = () => {
    setIsDesc(true);
    setIsEdu(false);
    setIsTotalApp(false);
  };

  const handleEduClick = () => {
    setIsDesc(false);
    setIsEdu(true);
    setIsTotalApp(false);
  };

  const handleTotalAppClick = () => {
    setIsDesc(false);
    setIsEdu(false);
    setIsTotalApp(true);
  };

  return (
    <>
      <NavbarGlobal />
      <div className="single-job-container">
        <div className="single-left-side">
          <div className="left-side-single-card">
            <div className="left-side-single-card-upper">
              <div className="left-side-single-main">
                <div className="left-side-single-img">
                  <img src={building} alt="" style={{ height: "60px" }} />
                </div>
                <div className="left-side-single-title">
                  <div>
                    <h3>{jobTitle}</h3>
                  </div>
                  <div className="single-job-capsules">
                    <div className="single-job-capsule-1">{jobLevel}</div>
                    <div className="single-job-capsule-2">{jobType}</div>
                    <div className="single-job-capsule-3">
                      {annualSalaryMax == ""
                        ? "Not Disclosed"
                        : "$" + annualSalaryMax + "/year"}
                    </div>
                    <div className="single-job-capsule-4">
                      {jobGeo == "Anywhere" ? "WFH" : "WFO"}
                    </div>
                    <div className="single-job-capsule-5">{jobGeo}</div>
                  </div>
                </div>
              </div>
              <div className="single-job-apply">
                <Link to="" className="apply-now">
                  Apply now
                </Link>
              </div>
            </div>
            <div className="left-side-single-card-mid">
              <div>
                <button
                  className="mid-btn"
                  style={{
                    borderBottom: isDesc === true ? "2px solid #0056b3" : "",
                  }}
                  onClick={handleDescClick}
                >
                  Job Description
                </button>
              </div>
              <div>
                <button
                  className="mid-btn"
                  style={{
                    borderBottom: isEdu === true ? "2px solid #0056b3" : "",
                  }}
                  onClick={handleEduClick}
                >
                  Education
                </button>
              </div>
              <div>
                <button
                  className="mid-btn"
                  style={{
                    borderBottom:
                      isTotalApp === true ? "2px solid #0056b3" : "",
                  }}
                  onClick={handleTotalAppClick}
                >
                  Total Applicants
                </button>
              </div>
            </div>
            <hr />
            <div className="left-side-single-card-bottom">
              {isDesc === true ? (
                <div
                  className="custom-container"
                  dangerouslySetInnerHTML={{ __html: apiText }}
                ></div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="single-right-side"></div>
      </div>
    </>
  );
};

export default SingleJob;
