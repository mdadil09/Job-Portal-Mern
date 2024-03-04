/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavbarGlobal from "../components/Headers/NavbarGlobal";
import DashUpper from "../components/admin/DashUpper";
import SearchInput from "../components/admin/SearchInput";
import plus from "../assets/plus.png";
import JobTable from "../components/admin/JobTable";
import AddJobModal from "../components/admin/AddJobModal";

const AdminDashboard = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      <NavbarGlobal />
      <div className="dashboard-container">
        <div className="dashboard-card">
          <DashUpper />
          <hr />
          <div className="middle-section-dash">
            <SearchInput />
            <button className="admin-add-btn" onClick={openModal}>
              <img src={plus} alt="plus" />
            </button>
          </div>
          <AddJobModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
          <JobTable />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
