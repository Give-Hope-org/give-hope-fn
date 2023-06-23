import React from "react";
import love from "../../../assets/love.svg";
import './FinanceDonationForm.css';


function FinanceDonationForm() {

  return (
    <div className="finance-donation-container">
      <div className="avatar">
        <img src={love} alt="Avatar Image"/>
      </div>
      <form className="finance-donation-form w-[90%] max-w-[500px] m-auto bg-white rounded-[10px]">
        <div className="medical-form-heading text-center text-[28px] mb-[20px]">
          <h2>Make a Donation!</h2>
        </div>
        <div className="form-data">
          <label for="first-name">First name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>
        <div className="form-data">
          <label for="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
        <div className="form-data">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
          <div className="form-data">
            <label for="Donate to">Donate to</label>
            <select type="donate to" id="donate to" name="donate to" required >
              <option name="donate to" value="">-- Select donate to --</option>
              <option name="donate to">Individual</option>
              <option name="donate to">Medical Organisation</option>
            </select>
          </div>
        <div className="form-data">
          <label for="donation type">Donation type</label>
          <select type="donation type" id="donation type" name="donation type" required >
            <option name="donation type" value="">-- Select a Donation type --</option>
            <option name="donation type">Surgery</option>
            <option name="donation type">Organ</option>
            <option name="donation type">Blood</option>
            <option name="donation type">Medical equipment</option>
            <option name="donation type">Others(please specify)</option>
          </select>
        </div>
        <button type="submit" className="btn-donation mt-[20px]">
          Donate
        </button>
      </form>
    </div>
  );
}

export default FinanceDonationForm;