import React from "react";
import give from "../../../assets/give.svg";
import "./MedicalDonationForm.css";

function MedicalDonationForm() {
  return (
    <div className="medical-donation-container bg-white flex p-[4rem] mt-[5rem]">
      <div className="avatar">
        <img src={give} alt="Avatar Image" />
      </div>
      <form className="medical-donation-form w-[90%] max-w-[500px] bg-white">
        <div class="medical-form-group">
          <h2>Make a Donation!</h2>
          <div className="donation-type">
            <label for="amount">Donation Type:</label>
            <select name="type" id="type" required>
              <option value="">-- Select a type --</option>
              <option name="type" value="Blood">Blood</option>
              <option name="type" value="Organ">Organ</option>
              <option name="type" value="Financial assistance">Financial assistance</option>
              <option name="type" value="Medical equipment/supplies">Medical equipment/supplies</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="designation">Donation Frequency:</label>
          <select name="designation" id="designation" required>
            <option value="">-- Select a frequency --</option>
            <option name="frequency" value="one-time">
              One-time
            </option>
            <option name="frequency" value="monthly">
              Monthly
            </option>
            <option name="frequency" value="annually">
              Annually
            </option>
          </select>
        </div>
        <div className="form-group">
          <label for="designation">Donation Designation:</label>
          <select name="designation" id="designation" required>
            <option value="">-- Select a designation --</option>
            <option value="general">General Fund</option>
            <option value="education">Education Program</option>
            <option value="healthcare">Healthcare Program</option>
          </select>
        </div>
        <div className="form-group">
          <label for="payment-method">Payment Method:</label>
          <select name="payment-method" id="payment-method" required>
            <option value="">-- Select a payment method --</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="btn-donation">
          Donate
        </button>
      </form>
    </div>
  );
}

export default MedicalDonationForm;
