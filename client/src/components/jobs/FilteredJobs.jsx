/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../cards/Card";

const FilteredJobs = ({ filteredItem }) => {
  return (
    <div className="job-container">
      <div className="job-card-container">
        {filteredItem.map((item) => (
          <Card key={item._id} jobs={item} />
        ))}
      </div>
    </div>
  );
};

export default FilteredJobs;
