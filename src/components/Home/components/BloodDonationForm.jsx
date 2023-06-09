import React from "react";
import love from "../../../assets/love.svg";
import './BloodDonationForm.css';


function BloodDonationForm() {

  return (
    <div className="blood-donation-container bg-white grid grid-cols-2 min-h-[90vh] p-[4rem] mt-[5rem]">
      <div className="avatar flex align-center">
        <img src={love} alt="Avatar Image" className="w-[100%]"/>
      </div>
      <form className="blood-donation-form w-[90%] max-w-[500px] m-auto bg-white rounded-[10px]">
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
          <label for="Age">Age</label>
          <select type="Age" id="Age" name="Age" required >
            <option name="Age" value="">-- Select Age --</option>
            <option name="Age">0-20</option>
            <option name="Age">21-29</option>
            <option name="Age">30-49</option>
            <option name="Age">50-79</option>
            <option name="Age">80 and above</option>
          </select>
        </div>
        <div className="form-data">
          <label for="Blood group">Blood group</label>
          <select type="Blood group" id="Blood group" name="Blood group" required >
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
        <button type="submit" className="btn-donation mt-[20px]">
          Donate
        </button>
      </form>
    </div>
  );
}

export default BloodDonationForm;