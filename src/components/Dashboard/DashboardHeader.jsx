import React from "react";
import "./Dashboard.css";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="logo-container">
        <img src={logo} alt="Give Hope Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
          <li>
            <div className="user-avatar">
              <img src={user} alt="User Avatar" />
              <span>userName</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DashboardHeader;
