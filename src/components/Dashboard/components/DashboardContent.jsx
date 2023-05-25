import React from "react";
import "./DashboardContent.css";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function DashboardContent() {
  return (
    <main className="dashboard-main">
      <h2>Welcome to your dashboard!</h2>
      <p>
        Here you can view and manage your donations, update your profile, and
        more.
      </p>
      <div className="card-container">
        <Card
          title="Manage Donations"
          icon={<FontAwesomeIcon icon={faMoneyBillAlt} />}
          description="View and manage your donations."
        />
        <Card
          title="Update Profile"
          icon={<FontAwesomeIcon icon={faUser} />}
          description="Update your profile information."
        />
        <Card
          title="Settings"
          icon={<FontAwesomeIcon icon={faCog} />}
          description="Configure your account settings."
        />
      </div>
    </main>
  );
}

export default DashboardContent;
