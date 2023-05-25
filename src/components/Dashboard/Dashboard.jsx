import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardMainContents from "./DashboardMainContents";
import DashboardFooter from "./DashboardFooter";
import "./Dashboard.css";

function Dashboard() {
  const [selectedPage, setSelectedPage] = useState("dashboard");
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <div className="dashboard-body">
        <DashboardSidebar onPageSelected={setSelectedPage} />
        <DashboardMainContents selectedPage={selectedPage} />
      </div>
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;
