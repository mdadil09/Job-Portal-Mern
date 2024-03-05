/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import NavbarGlobal from "../components/Headers/NavbarGlobal";
import DashUpper from "../components/admin/DashUpper";
import SearchInput from "../components/admin/SearchInput";
import plus from "../assets/plus.png";
import JobTable from "../components/admin/JobTable";
import AddJobModal from "../components/admin/AddJobModal";
import { fetchJobs } from "../redux/slice/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import FilteredTable from "../components/admin/FilteredTable";

const AdminDashboard = () => {
  const token = useSelector((state) => state.auth.token);

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (event) => {
    setIsOpen(false);
  };

  const [inputValue, setInputValue] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    fetchApi();
  };

  const fetchApi = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.get(
        `http://localhost:5700/api/jobs/search/${encodeURIComponent(
          inputValue
        )}`,
        config
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
      <div className="dashboard-container">
        <div className="dashboard-card">
          <DashUpper />
          <hr />
          <div className="middle-section-dash">
            <SearchInput
              inputValue={inputValue}
              handleInputChange={handleInputChange}
            />
            <button className="admin-add-btn" onClick={openModal}>
              <img src={plus} alt="plus" />
            </button>
          </div>
          <AddJobModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
          {inputValue == "" ? (
            <JobTable />
          ) : (
            <FilteredTable filteredItem={filteredItem} />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
