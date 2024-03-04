/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const DashUpper = () => {
  const user = useSelector((state) => state.auth.user);

  return (
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
  );
};

export default DashUpper;
