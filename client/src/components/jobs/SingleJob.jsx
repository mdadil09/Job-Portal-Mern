/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";
import NavbarGlobal from "../Headers/NavbarGlobal";
import building from "../../assets/office-building.png";
import { Link } from "react-router-dom";
import employees from "../../assets/employees.png";
import pin from "../../assets/pin.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import wfh from "../../assets/wfh.png";
import cafe from "../../assets/cafeteria.png";
import health from "../../assets/health-insurance.png";
import candidates from "../../assets/candi.png";

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
                <Link to="/apply" className="single-apply-now">
                  Apply
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
              {isEdu === true ? (
                <div className="education-single">
                  <h3>Education Qualification</h3>
                  <ul>
                    <li>Bachelor's Degree or higher in a relevant field</li>
                    <li>
                      Strong academic background with a minimum GPA requirement,
                      typically 3.0 or above on a 4.0 scale.
                    </li>
                    <li>
                      Continual learning mindset demonstrated through
                      certifications, workshops, or additional coursework
                      related to the job domain.
                    </li>
                    <li>
                      Advanced degree such as a Master's or Ph.D. may be
                      preferred for roles requiring specialized knowledge or
                      research-oriented positions.
                    </li>
                    <li>
                      Relevant professional certifications or licenses as
                      required by the industry or regulatory bodies
                    </li>
                  </ul>
                </div>
              ) : null}

              {isTotalApp === true ? (
                <div className="total-app-single">
                  <div className="total-app-desc-single">
                    <img src={candidates} alt="" />
                    <h3>
                      Total Candidate Applied:-{" "}
                      {Math.floor(Math.random() * (999 - 100 + 1) + 100)}+
                    </h3>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="single-right-side">
          <div className="single-right-side-heading">
            <h3>Company Overview</h3>
            <p>
              {companyName} is a leading provider of {jobIndustry} dedicated to
              delivering excellence and innovation. With a commitment to
              customer satisfaction, we strive to exceed expectations and drive
              success in every endeavor.
            </p>
          </div>
          <div className="company-emloyee-number-single">
            <div className="random-employee-number">
              <div>
                <img src={employees} alt="" />
              </div>
              <div>
                <p>10,000+ Employees</p>
              </div>
            </div>
            <div className="single-right-location">
              <div>
                <img src={pin} alt="" />
              </div>
              <div>
                <p>{jobGeo}</p>
              </div>
            </div>
          </div>
          <div className="single-right-reviews">
            <h3>Review</h3>
            <div className="single-reviews-container">
              <div>
                <img src={like} alt="" />
              </div>
              <div>
                <p>Friendly Enviroment</p>
              </div>
            </div>
            <div className="single-reviews-container">
              <div>
                <img src={like} alt="" />
              </div>
              <div>
                <p>Good for freshers to learn</p>
              </div>
            </div>
            <div className="single-reviews-container">
              <div>
                <img src={like} alt="" />
              </div>
              <div>
                <p>
                  {jobGeo === "Anywhere"
                    ? "Work from home facility"
                    : "State of art workplace"}
                </p>
              </div>
            </div>
            <div className="single-reviews-container">
              <div>
                <img src={dislike} alt="" />
              </div>
              <div>
                <p>Work life balance terrible</p>
              </div>
            </div>
            <div className="single-reviews-container">
              <div>
                <img src={dislike} alt="" />
              </div>
              <div>
                <p>Promotions and exposure is little slow</p>
              </div>
            </div>
          </div>
          <div className="single-right-benifit">
            <h3>Benifits & Perks</h3>
            <div className="benifits-single">
              <div>
                <img src={cafe} alt="" />
                <p>Cafeteria</p>
              </div>
              <div className="single-verticalLine"></div>

              <div>
                <img src={wfh} alt="" />
                <p>WFH</p>
              </div>
              <div className="single-verticalLine"></div>
              <div>
                <img src={health} alt="" />
                <p>Insurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJob;
