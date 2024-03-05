/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import search from "../../assets/search-icon.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchJobs } from "../../redux/slice/jobSlice";

const SearchInput = ({ inputValue, handleInputChange }) => {
  return (
    <div className="input-search">
      <img src={search} alt="" style={{ height: "10px" }} />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search by title,location,company,level,type etc..."
      />
    </div>
  );
};

export default SearchInput;
