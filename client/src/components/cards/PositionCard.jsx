/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PositionCard = ({ jobs }) => {
  return (
    <div className="position-card-container">
      <div className="position-card-container-text">
        <h1>
          <span style={{ color: "#0056b3" }}>Countless Career Options</span> Are
          Waiting<br></br> for you to explore
        </h1>
      </div>
      <div className="position-card-main">
        {jobs.map((item) => (
          <div className="position-card" key={item.id}>
            <div className="home-card-icon">
              <img src={item.company_logo} alt={item.company_logo} />
            </div>
            <div className="home-card-text">
              <h3>{item.company}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PositionCard;
