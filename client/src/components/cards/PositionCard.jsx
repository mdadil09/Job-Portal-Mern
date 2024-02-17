/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import design from "../../assets/design.png";
import market from "../../assets/market.png";
import sales from "../../assets/sales.png";
import wallet from "../../assets/wallet.png";
import automobile from "../../assets/automobile.png";
import deliveryTruck from "../../assets/delivery-truck.png";
import admin from "../../assets/admin.png";
import hook from "../../assets/hook.png";
import { Link } from "react-router-dom";

const PositionCard = () => {
  return (
    <div className="position-card-container">
      <div className="position-card-container-text">
        <h1>
          <span style={{ color: "#0056b3" }}>Countless Career Options</span> Are
          Waiting<br></br> for you to explore
        </h1>
      </div>
      <div className="position-card-main">
        <div className="position-card">
          <div className="home-card-icon">
            <img src={design} alt="design" />
          </div>
          <div className="position-card-text">
            <h3>Design</h3>
            <p>200+ Job Openings</p>
          </div>
        </div>
        <div className="position-card">
          <div className="home-card-icon">
            <img src={market} alt="market" />
          </div>
          <div className="position-card-text">
            <h3>Marketing</h3>
            <p>150+ Job Openings</p>
          </div>
        </div>
        <div className="position-card">
          <div className="home-card-icon">
            <img src={wallet} alt="wallet" />
          </div>
          <div className="position-card-text">
            <h3>Finance</h3>
            <p>300+ Job Openings</p>
          </div>
        </div>
        <div className="position-card">
          <div className="home-card-icon">
            <img src={automobile} alt="automobile" />
          </div>
          <div className="position-card-text">
            <h3>Automobile</h3>
            <p>170+ Job Openings</p>
          </div>
        </div>
        <div className="position-card">
          <div className="home-card-icon">
            <img src={deliveryTruck} alt="deliveryTruck" />
          </div>
          <div className="position-card-text">
            <h3>Logistics/Delivery</h3>
            <p>400+ Job Openings</p>
          </div>
        </div>
        <div className="position-card">
          <div className="home-card-icon">
            <img src={admin} alt="admin" />
          </div>
          <div className="position-card-text">
            <h3>Admin</h3>
            <p>100+ Job Openings</p>
          </div>
        </div>
        <div className="position-card">
          <div className="home-card-icon">
            <img src={hook} alt="hook" />
          </div>
          <div className="position-card-text">
            <h3>Construction</h3>
            <p>100+ Job Openings</p>
          </div>
        </div>
        <div className="position-card">
          <div className="home-card-icon">
            <img src={sales} alt="sales" />
          </div>
          <div className="position-card-text">
            <h3>Sales</h3>
            <p>100+ Job Openings</p>
          </div>
        </div>
      </div>
      <div className="position-card-container-btn">
        <Link to="jobs">View All Categories</Link>
      </div>
    </div>
  );
};

export default PositionCard;
