import React from "react";
import love from "../../../assets/love.svg";
import './EquipmentDonationForm.css';


function EquipmentDonationForm() {

  return (
    <div className="equipment-donation-container bg-white grid grid-cols-2 min-h-[90vh] p-[4rem] mt-[5rem]">
      <div className="avatar flex align-center">
        <img src={love} alt="Avatar Image" className="w-[100%]"/>
      </div>
      <form className="equipment-donation-form w-[90%] max-w-[500px] m-auto bg-white rounded-[10px]">
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
          <label for="Gender">Gender</label>
          <select type="Gender" id="Gender" name="Gender" required >
            <option name="Gender" value="">-- Select a gender --</option>
            <option name="Gender">Male</option>
            <option name="Gender">Female</option>
          </select>
        </div>
        <div className="form-data">
          <label for="Donate to">Donate to</label>
          <select type="donate to" id="donate to" name="donate to" required >
            <option name="donate to" value="">-- Select who to donate to --</option>
            <option name="donate to">Individual</option>
            <option name="donate to">Medical Organisation</option>
          </select>
        </div>
        <div className="form-data">
          <label for="equipment type">Equipment type</label>
          <select type="equipment type" id="equipment type" name="equipment type" required >
            <option name="equipment type" value="">-- Select an Equipment type --</option>
            <option name="equipment type">Sphygmomanometer</option>
            <option name="equipment type">Glucometer</option>
            <option name="equipment type">CT Scanner</option>
            <option name="equipment type">Medical gas</option>
            <option name="equipment type">Others(please specify)</option>
          </select>
        </div>
        <button type="submit" className="btn-donation mt-[20px]">
          Donate
        </button>
      </form>
    </div>
  );
}

export default EquipmentDonationForm;