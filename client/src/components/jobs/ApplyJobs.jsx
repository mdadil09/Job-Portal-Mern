/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import NavbarGlobal from "../Headers/NavbarGlobal";
import upload from "../../assets/upload.png";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

const ApplyJobs = () => {
  const [personalClick, setPersonalClick] = useState(true);
  const [eduClick, setEduClick] = useState(false);
  const [expClick, setExpClick] = useState(false);
  const [projectClick, setProjectClick] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [profilePic, setProfilePic] = useState();
  const [linkedLink, setLinkedLink] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState();
  const [branchName, setBranchName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [highSchool, setHighSchool] = useState("");
  const [secondarySchool, setSecondarySchool] = useState("");
  const [college, setCollege] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectType, setProjectType] = useState("");
  const [jobEndDate, setjobEndDate] = useState("");
  const [jobType, setJobType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [picName, setPicName] = useState("");
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(e.target.files[0]);
    setResumeName(file.name);
  };

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(e.target.files[0]);
    setPicName(file.name);
  };

  const handlePersonalClick = () => {
    setPersonalClick(true);
    setEduClick(false);
    setExpClick(false);
    setProjectClick(false);
  };

  const handleEduClick = () => {
    setPersonalClick(false);
    setEduClick(true);
    setExpClick(false);
    setProjectClick(false);
  };

  const handleExpClick = () => {
    setPersonalClick(false);
    setEduClick(false);
    setExpClick(true);
    setProjectClick(false);
  };

  const handleProjectClick = () => {
    setPersonalClick(false);
    setEduClick(false);
    setExpClick(false);
    setProjectClick(true);
  };

  const applyJob = async () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("profilePic", profilePic);
    formData.append("linkedIn", linkedLink);
    formData.append("github", gitLink);
    formData.append("address", address);
    formData.append("resume", resume);
    formData.append("branchName", branchName);
    formData.append("courseName", courseName);
    formData.append("highSchool", highSchool);
    formData.append("secondarySchool", secondarySchool);
    formData.append("college", college);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("projectName", projectName);
    formData.append("projectDesc", projectDesc);
    formData.append("projectType", projectType);
    formData.append("jobEndDate", jobEndDate);
    formData.append("jobType", jobType);
    formData.append("companyName", companyName);
    formData.append("jobRole", jobRole);
    formData.append("jobStartDate", jobStartDate);
    formData.append("projectLink", projectLink);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/jobs/applyjob",
        formData,
        config
      );

      fetchApplyJobs();
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchApplyJobs = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.post(
        `http://localhost:5700/api/jobs/jobapplied`,
        { id },
        config
      );
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <NavbarGlobal />
      <div className="apply-job-container">
        <div className="apply-job-form-container">
          <div className="apply-job-form">
            <div className="apply-form-upper">
              <div
                style={{
                  borderBottom:
                    personalClick === true
                      ? "2px solid #0056b3"
                      : "2px solid lightgrey",
                }}
              >
                Personal Information
              </div>
              <div
                style={{
                  borderBottom:
                    eduClick === true
                      ? "2px solid #0056b3"
                      : "2px solid lightgrey",
                }}
              >
                Education Details
              </div>
              <div
                style={{
                  borderBottom:
                    projectClick === true
                      ? "2px solid #0056b3"
                      : "2px solid lightgrey",
                }}
              >
                Project Details
              </div>
              <div
                style={{
                  borderBottom:
                    expClick === true
                      ? "2px solid #0056b3"
                      : "2px solid lightgrey",
                }}
              >
                Work Experience
              </div>
            </div>
            {personalClick === true ? (
              <>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Full Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Mobile Number</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter Your Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Address</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter Your Current Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">LinkedIn Link</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="linkedIn"
                      placeholder="Enter Your LinkedIn URL"
                      value={linkedLink}
                      onChange={(e) => setLinkedLink(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Github Link</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="github"
                      placeholder="Enter Your Github Url"
                      value={gitLink}
                      onChange={(e) => setGitLink(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-doc-input">
                  <div className="doc-input-group">
                    <div>
                      {" "}
                      <label className="label">
                        <span>
                          <img src={upload} alt="" />
                        </span>
                        <input
                          type="file"
                          name="profilePic"
                          required
                          onChange={handlePicChange}
                        />
                        <span>Upload Picture</span>
                      </label>
                    </div>
                    <div>
                      <span>{picName}</span>
                    </div>
                  </div>
                  <div className="doc-input-group">
                    <div>
                      {" "}
                      <label className="label">
                        <span>
                          <img src={upload} alt="" />
                        </span>
                        <input
                          type="file"
                          name="resume"
                          required
                          onChange={handleResumeChange}
                        />
                        <span>Upload Resume</span>
                      </label>
                    </div>
                    <div>
                      <p>{resumeName}</p>
                    </div>
                  </div>
                </div>
                <div className="apply-input-group-btn">
                  <button className="apply-next-btn" onClick={handleEduClick}>
                    Next
                  </button>
                </div>
              </>
            ) : null}
            {eduClick === true ? (
              <>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">High School</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="highSchool"
                      placeholder="Enter Your High School Name"
                      value={highSchool}
                      onChange={(e) => setHighSchool(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Secondary School</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="secondarySchool"
                      placeholder="Enter Your Secondary School Name"
                      value={secondarySchool}
                      onChange={(e) => setSecondarySchool(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">College Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="college"
                      placeholder="Enter Your College Name"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Branch Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="branchName"
                      placeholder="Enter Your Branch Name"
                      value={branchName}
                      onChange={(e) => setBranchName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Course Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="courseName"
                      placeholder="Enter Your Course Name"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Start Date</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="startDate"
                      placeholder="Enter Your Course Start Date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">End Date</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="endDate"
                      placeholder="Enter Your Course End Date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group-btn">
                  <button
                    className="apply-next-btn"
                    onClick={handlePersonalClick}
                  >
                    Back
                  </button>
                  <button
                    className="apply-next-btn"
                    onClick={handleProjectClick}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : null}
            {projectClick === true ? (
              <>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Project Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="projectName"
                      placeholder="Enter Your Project Name"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Project Description</label>
                  </div>
                  <div>
                    <textarea
                      type="text"
                      name="projectDesc"
                      placeholder="Describe Your Project"
                      value={projectDesc}
                      onChange={(e) => setProjectDesc(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Project Type</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="projectType"
                      placeholder="Enter Your Project Type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Project Link</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="projectLink"
                      placeholder="Enter Your Project URL (eg:- github url,live url etc...)"
                      value={projectLink}
                      onChange={(e) => setProjectLink(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group-btn">
                  <button className="apply-next-btn" onClick={handleEduClick}>
                    Back
                  </button>
                  <button className="apply-next-btn" onClick={handleExpClick}>
                    Next
                  </button>
                </div>
              </>
            ) : null}
            {expClick === true ? (
              <>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Job Type</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="jobType"
                      placeholder="Job Type"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Company Name</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Enter Your Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Job Role</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="jobRole"
                      placeholder="Describe Your Project"
                      value={jobRole}
                      onChange={(e) => setJobRole(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Job Start Date</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="jobStartDate"
                      placeholder="Enter Your Start Date"
                      value={jobStartDate}
                      onChange={(e) => setJobStartDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group">
                  <div>
                    {" "}
                    <label htmlFor="">Job End Date</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="jobEndDate"
                      placeholder="Enter Job End Date"
                      value={jobEndDate}
                      onChange={(e) => setjobEndDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="apply-input-group-btn">
                  <button
                    className="apply-back-btn"
                    onClick={handleProjectClick}
                  >
                    Back
                  </button>
                  <button className="apply-next-btn" onClick={applyJob}>
                    Submit
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyJobs;
