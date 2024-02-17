/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import gps from "../../assets/gps.png";
import phone from "../../assets/phone.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          <h3>JobComet</h3>
          <p>
            JobComet offers you a cosmic gateway to boundless career<br></br>
            possibilities. Explore our constellation of opportunities<br></br>{" "}
            and soar towards your professional aspirations.<br></br> Embark on
            your career odyssey with JobComet today!
          </p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <div>
            <Link to="">Home</Link>
          </div>
          <div>
            <Link to="">About Us</Link>
          </div>
          <div>
            <Link to="">Jobs</Link>
          </div>
          <div>
            <Link to="">Services</Link>
          </div>
          <div>
            <Link to="">Contact Us</Link>
          </div>
        </div>
        <div className="quick-links">
          <h3>Legal</h3>
          <div>
            <Link to="">Term of Use</Link>
          </div>
          <div>
            <Link to="">Help Center</Link>
          </div>
          <div>
            <Link to="">Privacy Policy</Link>
          </div>
          <div>
            <Link to="">Copyrights</Link>
          </div>
        </div>
        <div className="quick-links">
          <h3>Follow Us</h3>
          <div>
            <Link to="">Facebook</Link>
          </div>
          <div>
            <Link to="">Instagram</Link>
          </div>
          <div>
            <Link to="">LinkedIn</Link>
          </div>
          <div>
            <Link to="">Twitter</Link>
          </div>
          <div>
            <Link to="">Youtube</Link>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <div>
            <span>
              <img src={phone} style={{ height: "18px" }} alt="" />
            </span>
            <p> 9999-444-333</p>
          </div>

          <div>
            <span>
              <img src={gps} style={{ height: "18px" }} alt="" />
            </span>
            <p>
              2434,Whitfield Avenue,<br></br>
              Karnatka,India,401301
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom-section">
        <span>
          Copyright © 2024 <Link href="/">JobComet.</Link> All rights reserved
        </span>
        <span>Term & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
