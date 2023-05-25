import React from "react";
import "./Dashboard.css";
import DashboardContent from "./components/DashboardContent";
import MyDonations from "./components/MyDonations";
import Settings from "./components/Settings";

function DashboardMainContents(props) {
  const { selectedPage } = props;
  return (
    <main className="dashboard-main">
      {selectedPage === "dashboard" && <DashboardContent />}
      {selectedPage === "myDonations" && <MyDonations />}
      {selectedPage === "settings" && <Settings />}
    </main>
  );
}

export default DashboardMainContents;
