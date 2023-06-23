import React from "react";
import spreadlove from "../../../assets/spreadlove.svg";
import './FinanceRequestForm.css';

function FinanceRequestForm() {

  return (
    <div className="finance-request-container">
      <div className="avatar">
        <img src={spreadlove} alt="Avatar Image"/>
      </div>
      <form className="finance-request-form w-[90%] max-w-[500px] m-auto bg-white rounded-[10px]">
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
            <label for="request type">Request type</label>
            <select type="request type" id="request type" name="request type" required >
              <option name="request type" value="">-- Select a Request type --</option>
              <option name="request type">Surgery</option>
              <option name="request type">Organ</option>
              <option name="request type">Blood</option>
              <option name="request type">Medical equipment</option>
              <option name="request type">Others(please specify)</option>
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

export default FinanceRequestForm;