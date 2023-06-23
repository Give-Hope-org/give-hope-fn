import React from "react";
import love from "../../../assets/love.svg";
import './BloodDonationForm.css';


function BloodDonationForm() {

  return (
    <div className="blood-donation-container">
      <div className="avatar">
        <img src={love} alt="Avatar"/>
      </div>
      <form className="blood-donation-form rounded-[10px]">
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
          <label for="Blood group">Blood group</label>
          <select type="Blood-group" id="Blood group" name="Blood group" required >
            <option name="Blood group" value="">-- Select a Blood group --</option>
            <option name="Blood group">A+</option>
            <option name="Blood group">B+</option>
            <option name="Blood group">A-</option>
            <option name="Blood group">B-</option>
            <option name="Blood group">AB+</option>
            <option name="Blood group">AB-</option>
            <option name="Blood group">O+</option>
            <option name="Blood group">O-</option>
          </select>
        </div>
        <button type="submit" className="btn-donation mt-[80px]">
          Donate
        </button>
      </form>
    </div>
  );
}

export default BloodDonationForm;