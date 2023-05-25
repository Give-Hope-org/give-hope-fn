import React from "react";
import "./DonationForm.css";
import give from "../../../assets/give.svg";
function DonationForm() {
  return (
    <div className="donation-container">
      <div className="avatar">
        <img src={give} alt="Avatar Image" />
      </div>
      <form className="donation-form">
        <div class="form-group">
          <h2>Make a Donation!</h2>
          <label for="amount">Donation Amount:</label>
          <div className="input-group">
            <span className="currency">$</span>
            <input
              type="number"
              name="amount"
              id="amount"
              min="1"
              step="1"
              placeholder="0.00"
              required
            />
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
        <div className="form-group">
          <label for="card-number">Card Number:</label>
          <input
            type="text"
            name="card-number"
            id="card-number"
            maxlength="16"
            placeholder="XXXX-XXXX-XXXX-XXXX"
          />
        </div>
        <div className="form-group">
          <label for="expiry-date">Expiry Date:</label>
          <input
            type="text"
            name="expiry-date"
            id="expiry-date"
            maxlength="7"
            placeholder="MM/YY"
          />
        </div>
        <div className="form-group">
          <label for="cvv">CVV:</label>
          <input
            type="password"
            name="cvv"
            id="cvv"
            maxlength="3"
            placeholder="XXX"
          />
        </div>
        <button type="submit" className="btn-donation">
          Donate
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
