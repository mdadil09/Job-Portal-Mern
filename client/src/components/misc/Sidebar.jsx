/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import search from "../../assets/search-icon.png";
import axios from "axios";

const Sidebar = ({ inputValue, handleInputChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="secondary-nav">
      <div className="input-search">
        <img src={search} alt="" style={{ height: "10px" }} />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search by title,location,company,level,type etc..."
        />
      </div>
      <div className="select-menu-1">
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          style={{ maxWidth: "100px" }}
          className="select-menu-job-level"
        >
          <option value="">Sort by</option>
          <option value="option1">High to Low</option>
          <option value="option2">Low to high</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
