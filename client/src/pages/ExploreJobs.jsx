/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/slice/jobSlice";
import Sidebar from "../components/misc/Sidebar";
import JobCards from "../components/cards/JobCards";

const ExploreJobs = () => {
  const jobs = useSelector((state) => state.job.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <div className="explore-jobs">
      <Sidebar jobs={jobs} />
      <JobCards jobs={jobs} />
    </div>
  );
};

export default ExploreJobs;
