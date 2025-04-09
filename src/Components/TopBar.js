import React from "react";
import "./TopBar.css";
import { FaSearch } from "react-icons/fa";
import logo from "./logo.png"; // ✅ Correct way to import local image

function TopBar() {
  return (
    <div className="topbar-wrapper">
      <div className="right-section">
        <p className="lang-links">ENGLISH | සිංහල | தமிழ்</p>
      </div>

      <div className="topbar">
        <div className="topbar-left">
          <img src={logo} alt="EPD Logo" className="topbar-logo" />
        </div>

        <div className="topbar-search-section">
          <input type="text" placeholder="You can find your books here….." />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        <div className="topbar-hotline">
          <p>HOTLINE</p>
          <span>011 278 48 15</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
