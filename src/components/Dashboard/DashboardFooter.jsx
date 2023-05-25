import React from "react";
import "./Dashboard.css";

function DashboardFooter() {
  const date = new Date().getFullYear();
  return (
    <footer className="dashboard-footer">
      <p>&copy; {date} Give Hope Platform</p>
    </footer>
  );
}

export default DashboardFooter;
