/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import NavbarGlobal from "../components/Headers/NavbarGlobal";
import { useSelector } from "react-redux";
import axios from "axios";
import building from "../assets/office-building.png";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const fetchUserJob = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.get(
        "http://localhost:5700/api/jobs/applied",
        config
      );

      setAppliedJobs(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUserJob = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.delete(
        `http://localhost:5700/api/jobs/delete/${id}`,
        config
      );

      setAppliedJobs(appliedJobs.filter((item) => item.jobId._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUserJob();
  }, []);

  return (
    <>
      <NavbarGlobal />
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="dashboard-upper">
            <div className="dash-upper-left">
              <h3>Dashboard</h3>
            </div>
            <div className="dash-upper-right">
              <img src={`http://localhost:5700/assets/${user.image}`} alt="" />
              <div className="dash-upper-right-text">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="dashboard-lower">
            <h3>Job's You have applied</h3>
            {appliedJobs.map((item) => (
              <div className="dashboard-applied" key={item._id}>
                <div className="dash-img-text">
                  <img src={building} alt="" />
                  <div className="dashboard-applied-text">
                    <h3>{item.jobId.jobTitle}</h3>
                    <p>{item.jobId.companyName}</p>
                  </div>
                </div>
                <div className="dashboard-ago">
                  <p>3 days ago</p>
                </div>
                <div className="dashbord-btn">
                  <button
                    className="withdraw-btn"
                    onClick={() => deleteUserJob(item.jobId._id)}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
