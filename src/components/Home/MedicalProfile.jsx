import React from 'react';
import { Link } from 'react-router-dom';
import medicalProfile from '../../assets/medicalProfile.jpg';
import Assistance from '../../assets/Assistance.jpg';
import Blood from '../../assets/bloodDonation.jpg';
import Organ from '../../assets/organDonation.jpg';
import Equipment from '../../assets/medicalEquipment.jpg';
import './MedicalProfile.css';

function MedicalProfile () {
  return (
    <div className="medical-profile-container bg-neutral-200 p-4 w-[100%] m-auto flex justify-center">
      <div className="medical-profile">
        <div className="medical-profile-header">
          <img src={medicalProfile} alt="medical-description" />
          <h2 className="mt-[15px] mb-[15px] text-[40px] font-bold">Medical Support</h2>
              <p className="text-[23px]">
                Mission: To help someone smile again.
              </p>
        </div>

        <div className="medical-profile-info">
          <p>This section consists of four categories you can donate to or make a donation request. They include:</p>
          <ul className="list-disc ml-[30px] mt-[10px]">
            <li>Organ Donation</li>
            <li>Blood Donation</li>
            <li>Medical equipment/supplies</li>
            <li>Financial Assistance</li>
          </ul>
          <div className="category-info">
            <h3 className="category-heading">Organ Donation</h3>
            <div className="category-grid">
              <div className="category-image">
                <img src={Organ} alt="Organ-Donation" />
              </div>
              <p> In this category, you can either request or be an organ donor. Donation of organs such as Kidney, etc is taken care of by a verified medical organization. <a href="#">Click here to view more </a></p>
            </div>
            <div className="medical-donate">
              <Link to ="/organ-donation-form">
                <button className="bg-blue-600">Donate</button>
              </Link>
              <Link to ="/organ-request-form">
                <button className="bg-blue-600">Request for Donation</button>
              </Link>
            </div>
          </div>
          <div className="category-info">
            <h3 className="category-heading">Blood Donation</h3>
            <div className="category-grid">
              <div className="category-image">
                <img src={Blood} alt="Blood-Donation" />
              </div>
              <p> Here, you can donate to those in need of blood for surgeries and other related cause. The various blood group types for donation include; A, B, AB, O. Verified medical organizations in charge of blood donation will ensure the proper compability of the blood being donated. <a href="#">Click here to view more </a></p>
            </div>
            <div className="medical-donate">
              <Link to ="/blood-donation-form">
                <button className="bg-blue-600">Donate</button>
              </Link>
              <Link to ="/blood-request-form">
                <button className="bg-blue-600">Request for Donation</button>
              </Link>
            </div>
          </div>
          <div className="category-info">
            <h3 className="category-heading">Medical equipment/supplies</h3>
            <div className="category-grid">
              <div className="category-image">
                <img src={Equipment} alt="medical-equipment" />
              </div>
              <p>This category is mainly for hospitals that lack some important equipments like kidney dialysis machine, etc. Also blood sugar test, test strip, blood pressure machine etc can be donated to those who can't afford to get them. <a href="#">Click here to view more </a></p>
            </div>
            <div className="medical-donate">
              <Link to ="/equipment-donation-form">
                <button className="bg-blue-600">Donate</button>
              </Link>
              <Link to ="/equipment-request-form">
                <button className="bg-blue-600">Request for Donation</button>
              </Link>
            </div>
          </div>
          <div className="category-info">
            <h3 className="category-heading">Financial Assistance</h3>
            <div className="category-grid">
              <div className="category-image">
                <img src={Assistance} alt="medical-funds" />
              </div>
              <p>This category focuses on those in need of financial support as regards their health. <a href="#">Click here to view more </a></p>
            </div>
            <div className="medical-donate">
              <Link to ="/finance-donation-form">
                <button className="bg-blue-600">Donate</button>
              </Link>
              <Link to="/finance-request-form">
                <button className="bg-blue-600">Request for Donation</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalProfile;