/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UpdateModal from "./UpdateModal";
import { useSelector } from "react-redux";
import axios from "axios";
import edit from "../../assets/edit.png";
import del from "../../assets/delete.png";

const FilteredTable = ({ filteredItem }) => {
  let jobs = useSelector((state) => state.job.jobs);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filteredId, setFilteredId] = useState([]);
  const token = useSelector((state) => state.auth.token);

  const openModal = (id) => {
    setIsOpen(true);
    const orderId = jobs.filter((item) => item._id === id);
    setFilteredId(orderId);
  };
  const closeModal = (event) => {
    setIsOpen(false);
  };

  const deleteJob = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.delete(
        `http://localhost:5700/api/admin/delete/${id}`,
        config
      );

      jobs = jobs.filter((item) => item._id !== id);

      console.log("Job deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Job Id</th>
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Date Posted</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItem.map((item) => (
            <tr key={item._id}>
              <td>{item.id}</td>
              <td>{item.jobTitle}</td>
              <td>{item.companyName}</td>
              <td>{item.pubDate}</td>
              <td>
                <button
                  className="admin-table-btn"
                  onClick={() => openModal(item._id)}
                >
                  <img src={edit} alt="" style={{ height: "24px" }} />
                </button>
                <button
                  className="admin-table-btn"
                  onClick={() => deleteJob(item._id)}
                >
                  <img src={del} alt="" style={{ height: "24px" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdateModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        filteredId={filteredId}
      />
    </>
  );
};

export default FilteredTable;
