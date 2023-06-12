import React from "react";
import spreadlove from "../../../assets/spreadlove.svg";
import './EquipmentRequestForm.css';

function EquipmentRequestForm() {

  return (
    <div className="equipment-request-container bg-white grid grid-cols-2 min-h-[90vh] p-[4rem] mt-[5rem]">
      <div className="avatar flex align-center">
        <img src={spreadlove} alt="Avatar Image" className="w-[100%]"/>
      </div>
      <form className="equipment-request-form w-[90%] max-w-[500px] m-auto bg-white rounded-[10px]">
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
            <label for="Equipment type">Equipment type</label>
            <select type="Equipment type" id="Equipment type" name="Equipment type" required >
              <option name="Equipment type" value="">-- Select type --</option>
              <option name="Equipment type">Sphygmomanometer</option>
              <option name="Equipment type">Glucometer</option>
              <option name="Equipment type">CT Scanner</option>
              <option name="Equipment type">Medical gas</option>
              <option name="Equipment type">Others(please specify)</option>
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

export default EquipmentRequestForm;