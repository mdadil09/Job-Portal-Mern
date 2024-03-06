/* eslint-disable no-unused-vars */
import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ExploreJobs from "./pages/ExploreJobs";
import Footer from "./components/footer/Footer";
import SingleJob from "./components/jobs/SingleJob";
import ApplyJobs from "./components/jobs/ApplyJobs";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoutes from "./components/Auth/ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<ExploreJobs />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/apply/:id" element={<ApplyJobs />} />
        </Route>
        <Route path="/singlejob/:id" element={<SingleJob />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/adminSignup" element={<AdminRegister />} />
        <Route path="/adminSignin" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
