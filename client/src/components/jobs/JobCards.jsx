/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "../cards/Card";

const JobCards = ({ jobs }) => {
  return (
    <div className="job-container">
      <div className="job-card-container">
        {jobs.map((item) => (
          <Card key={item._id} jobs={item} />
        ))}
      </div>
    </div>
  );
};

export default JobCards;
