/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "react-modal";
import cancel from "../../assets/cancel.png";
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

const UpdateModal = ({ modalIsOpen, closeModal, filteredId }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobGeo, setJobGeo] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [annualSalaryMin, setAnnualSalaryMin] = useState("");
  const [annualSalaryMax, setAnnualSalaryMax] = useState("");
  const [url, setUrl] = useState("");
  const token = useSelector((state) => state.auth.token);

  const idArr = filteredId.map((item) => item._id);

  const id = idArr[0];

  const updateJob = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.patch(
        `http://localhost:5700/api/admin/update/${id}`,
        {
          jobTitle,
          jobLevel,
          jobGeo,
          annualSalaryMin,
          annualSalaryMax,
          url,
          jobDescription,
        },
        config
      );

      closeModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        portalClassName="modal"
      >
        <div className="update-form-container">
          <div className="add-form-heading">
            <div className="add-form-text">
              <h3>Update Information</h3>
            </div>
            <div className="add-form-close-btn">
              <button className="adm-close-btn" onClick={closeModal}>
                <img src={cancel} alt="" />
              </button>
            </div>
          </div>
          <div className="update-form">
            <div className="job-row-1">
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
                  <label htmlFor="">Job Geo</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="jobType"
                    placeholder="Enter Job Location"
                    value={jobGeo}
                    onChange={(e) => setJobGeo(e.target.value)}
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
                  <label htmlFor="">Company Url</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="salaryCurrency"
                    placeholder="Enter Company Url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
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
            <button className="add-next-btn" onClick={updateJob}>
              Update Job
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateModal;
