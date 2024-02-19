/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Sidebar = ({ jobs }) => {
  return (
    <div className="sidebar">
      <div className="filter-jobs">
        <h3>Filter Jobs</h3>
        <button>Clear All</button>
      </div>
      <div className="job-level">
        <button>Job Level</button>W
        <div className="job-level-data">comming soon</div>
      </div>
    </div>
  );
};

export default Sidebar;
