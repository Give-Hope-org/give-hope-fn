import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faMoneyBillAlt,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function DashboardSidebar(props) {
  return (
    <aside className="dashboard-sidebar">
      <h1 className="title">
        <span style={{ color: "red" }}>GIVE</span>{" "}
        <span style={{ color: "#1565C0" }}>HOPE</span>
      </h1>
      <ul>
        <li className={props.onPageSelected === "dashboard" ? "active" : ""}>
          <a href="#" onClick={() => props.onPageSelected("dashboard")}>
            <FontAwesomeIcon icon={faChartLine} /> Dashboard
          </a>
        </li>
        <li className={props.onPageSelected === "myDonations" ? "active" : ""}>
          <a href="#" onClick={() => props.onPageSelected("myDonations")}>
            <FontAwesomeIcon icon={faMoneyBillAlt} /> My Donations
          </a>
        </li>
        <li className={props.onPageSelected === "settings" ? "active" : ""}>
          <a href="#" onClick={() => props.onPageSelected("settings")}>
            <FontAwesomeIcon icon={faCog} /> Settings
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default DashboardSidebar;
