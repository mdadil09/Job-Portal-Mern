/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "react-modal";
import cancel from "../../assets/cancel.png";
import image from "../../assets/image.png";
import { useSelector } from "react-redux";
import axios from "axios";

const customStyles = {
  content: {
    width: "auto",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    background: "var(--light-gohan, #FFF)",
    boxShadow:
      "0px 0px 1px 0px rgba(0, 0, 0, 0.20), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 32px 32px -8px rgba(0, 0, 0, 0.08)",
  },
};

const AddJobModal = ({ modalIsOpen, closeModal }) => {
  const [url, setUrl] = useState("");
  const [jobSlug, setJobSlug] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLogo, setCompanyLogo] = useState();
  const [jobIndustry, setJobIndustry] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobGeo, setJobGeo] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [jobExcerpt, setJobExcerpt] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [annualSalaryMin, setAnnualSalaryMin] = useState("");
  const [annualSalaryMax, setAnnualSalaryMax] = useState("");
  const [salaryCurrency, setSalaryCurrency] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [nextOne, setNextOne] = useState(false);
  const [backOne, setBackOne] = useState(false);
  const token = useSelector((state) => state.auth.token);

  const handleNextOne = () => {
    setNextOne(true);
  };

  const handleBackOne = () => {
    setNextOne(false);
  };

  const addJob = async () => {
    const formData = new FormData();

    formData.append("url", url);
    formData.append("jobSlug", jobSlug);
    formData.append("jobTitle", jobTitle);
    formData.append("companyName", companyName);
    formData.append("companyLogo", companyLogo);
    formData.append("jobIndustry", jobIndustry);
    formData.append("jobType", jobType);
    formData.append("jobGeo", jobGeo);
    formData.append("jobLevel", jobLevel);
    formData.append("jobExcerpt", jobExcerpt);
    formData.append("jobDescription", jobDescription);
    formData.append("annualSalaryMin", annualSalaryMin);
    formData.append("annualSalaryMax", annualSalaryMax);
    formData.append("salaryCurrency", salaryCurrency);
    formData.append("pubDate", pubDate);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.post(
        "http://localhost:5700/api/admin/add",
        formData,
        config
      );

      closeModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      portalClassName="modal"
    >
      <div className="add-form-container">
        <div className="add-form-heading">
          <div className="add-form-text">
            {nextOne === true ? (
              <h3>Company Information</h3>
            ) : (
              <h3>General Information</h3>
            )}
          </div>
          <div className="add-form-close-btn">
            <button className="adm-close-btn" onClick={closeModal}>
              <img src={cancel} alt="" />
            </button>
          </div>
        </div>

        {nextOne === true ? (
          <>
            <div className="job-row-5">
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Company Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Enter Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
              </div>
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Job Location</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="jobGeo"
                    placeholder="Enter Job Location"
                    value={jobGeo}
                    onChange={(e) => setJobGeo(e.target.value)}
                  />
                </div>
              </div>
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Company Url</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="url"
                    placeholder="Enter Company Url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="job-row-6">
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Job Excerpt</label>
                </div>
                <div>
                  <textarea
                    name="JobExcerpt"
                    placeholder="Write Job Excerpt"
                    value={jobExcerpt}
                    onChange={(e) => setJobExcerpt(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="add-next-btn" onClick={handleBackOne}>
              Back
            </button>
            <button className="add-next-btn" onClick={addJob}>
              Submit
            </button>
          </>
        ) : (
          <>
            <div className="job-row-1">
              <div className="input-group-file">
                <div style={{ marginLeft: "4px" }}>Company Logo</div>
                <div style={{ marginTop: "5px" }}>
                  <label className="label">
                    <span>
                      <img
                        src={image}
                        alt=""
                        style={{ height: "14px", marginRight: "5px" }}
                      />
                    </span>
                    <input
                      type="file"
                      name="companyLogo"
                      onChange={(e) => setCompanyLogo(e.target.files[0])}
                    />
                    <span>Company Logo</span>
                  </label>
                </div>
              </div>
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Job Title</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Enter Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Job Type</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="jobType"
                    placeholder="Enter Job Type"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="job-row-2">
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Job Level</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="jobLevel"
                    placeholder="Enter Job Level"
                    value={jobLevel}
                    onChange={(e) => setJobLevel(e.target.value)}
                  />
                </div>
              </div>
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Job Slug</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="jobSlug"
                    placeholder="Enter Job Slug"
                    value={jobSlug}
                    onChange={(e) => setJobSlug(e.target.value)}
                  />
                </div>
              </div>
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Job Industry</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="jobIndustry"
                    placeholder="Enter Job Industry"
                    value={jobIndustry}
                    onChange={(e) => setJobIndustry(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="job-row-3">
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Offer Salary</label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="$ Min"
                    name="annualSalaryMin"
                    value={annualSalaryMin}
                    onChange={(e) => setAnnualSalaryMin(e.target.value)}
                  />{" "}
                  <input
                    type="text"
                    name="annualSalaryMax"
                    placeholder="$ Max"
                    value={annualSalaryMax}
                    onChange={(e) => setAnnualSalaryMax(e.target.value)}
                  />
                </div>
              </div>
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Currency Type</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="salaryCurrency"
                    placeholder="Enter Currency Type"
                    value={salaryCurrency}
                    onChange={(e) => setSalaryCurrency(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="job-row-4">
              <div className="add-input-group">
                <div>
                  <label htmlFor="">Job Description</label>
                </div>
                <div>
                  <textarea
                    name="jobDescription"
                    placeholder="Write Your Job Description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="add-next-btn" onClick={handleNextOne}>
              Next
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default AddJobModal;
