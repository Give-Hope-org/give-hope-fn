import React from "react";
import spreadlove from "../../../assets/spreadlove.svg";
import './BloodRequestForm.css';

function BloodRequestForm() {

  return (
    <div className="blood-request-container">
      <div className="avatar w-[100%]">
        <img src={spreadlove} alt="Avatar Image"/>
      </div>
      <form className="blood-request-form rounded-[10px]">
        <div className="medical-form-heading text-center text-[28px] mb-[20px]">
          <h2>Request for Donation!</h2>
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
        <div className="form-data">
          <label for="text">Reason:</label>
          <input type="text" id="text" name="text" required />
        </div>
        <button type="submit" className="btn-donation mt-[20px]">
          Request
        </button>
      </form>
    </div>
  );
}

export default BloodRequestForm;