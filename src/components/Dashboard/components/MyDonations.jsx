import React from "react";
import "./MyDonations.css";

function MyDonations() {
  return (
    <div className="dashboard-main">
      <h1>My Donations</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Cause</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>April 1, 2023</td>
            <td>Education for All</td>
            <td>$100</td>
            <td style={{ color: "orange" }}>Pending</td>
          </tr>
          <tr>
            <td>March 15, 2023</td>
            <td>Water for Life</td>
            <td>$50</td>
            <td style={{ color: "green" }}>Complete</td>
          </tr>
          <tr>
            <td>February 28, 2023</td>
            <td>Feed the Hungry</td>
            <td>$75</td>
            <td style={{ color: "green" }}>Complete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyDonations;
