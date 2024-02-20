/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/slice/jobSlice";
import Sidebar from "../components/misc/Sidebar";
import JobCards from "../components/jobs/JobCards";
import NavbarGlobal from "../components/Headers/NavbarGlobal";
import axios from "axios";
import FilteredJobs from "../components/jobs/FilteredJobs";

const ExploreJobs = () => {
  const jobs = useSelector((state) => state.job.jobs);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    fetchApi();
  };

  const fetchApi = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5700/api/jobs/search/${inputValue}`
      );
      setFilteredItem(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <>
      <NavbarGlobal />
      <Sidebar inputValue={inputValue} handleInputChange={handleInputChange} />
      {inputValue === "" ? (
        <JobCards jobs={jobs} />
      ) : (
        <FilteredJobs filteredItem={filteredItem} />
      )}
    </>
  );
};

export default ExploreJobs;
