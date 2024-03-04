/* eslint-disable no-unused-vars */
import React from "react";
import edit from "../../assets/edit.png";
import del from "../../assets/delete.png";
import { useSelector } from "react-redux";

const JobTable = () => {
  const jobs = useSelector((state) => state.job.jobs);

  console.log(jobs);
  return (
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
        {jobs.map((item) => (
          <tr key={item._id}>
            <td>{item.id}</td>
            <td>{item.jobTitle}</td>
            <td>{item.companyName}</td>
            <td>{item.pubDate}</td>
            <td>
              <button className="admin-table-btn">
                <img src={edit} alt="" style={{ height: "24px" }} />
              </button>
              <button className="admin-table-btn">
                <img src={del} alt="" style={{ height: "24px" }} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JobTable;
