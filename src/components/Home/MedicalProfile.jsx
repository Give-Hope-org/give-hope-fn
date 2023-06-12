import React from 'react';
import { Link } from 'react-router-dom';
import medicalProfile from '../../assets/medicalProfile.jpg';
import Assistance from '../../assets/Assistance.jpg';
import Blood from '../../assets/bloodDonation.jpg';
import Organ from '../../assets/organDonation.jpg';
import Equipment from '../../assets/medicalEquipment.jpg';
import Request from '../../assets/requests.jpg';
import Medical from '../../assets/medical.jpg';
import Breath from '../../assets/breath.jpg';
import Finance from '../../assets/finance-request.jpg';
import Location from '../../assets/location-logo.png';
import './MedicalProfile.css';

function MedicalProfile () {
  return (
    <div className="medical-profile-container bg-white p-4 w-[100%] m-auto flex justify-center">
      <div className="medical-profile">
        <div className="medical-profile-header">
          <img src={medicalProfile} alt="medical-description" />
          <h2 className="mt-[15px] mb-[15px] text-[40px] font-bold">Medical Support</h2>
              <p className="text-[23px]">
                Mission: To help someone smile again.
              </p>
        </div>
        <div className="medical-profile-info">
          <div className="p-8">
            <p>This section consists of four categories you can donate to or make a donation request. They include:</p>
            <ul className="list-disc ml-[30px] mt-[10px]">
              <li>Organ Donation</li>
              <li>Blood Donation</li>
              <li>Medical equipment/supplies</li>
              <li>Financial Assistance</li>
            </ul>
          </div>
          <div className="bg-neutral-50 w-[100%]">
            <p className="text-center mt-[150px] font-bold text-[35px]">Medical category</p>
            <div className="category-info-main">
              <div className="category-info">
                <div className="category-grid">
                  <div className="category-image">
                    <img src={Organ} alt="Organ-Donation" />
                  </div>
                  <h3 className="category-heading">Organ Donation</h3>
                  <p> In this category, you can either request or be an organ donor.</p>
                  <Link to="/organ-description">
                    <button className="btn text-sm w-[100%]">Click here to view more </button>
                  </Link>
                </div>
              </div>
              <div className="category-info">
                <div className="category-grid">
                  <div className="category-image">
                    <img src={Blood} alt="Blood-Donation" />
                  </div>
                  <h3 className="category-heading">Blood Donation</h3>
                  <p> Here, you can donate to those in need of blood for surgeries and other related cause.</p>
                  <Link to="/blood-description">
                    <button className="btn text-sm w-[100%]">Click here to view more</button>
                  </Link>
                </div>
              </div>
              <div className="category-info">
                <div className="category-grid">
                  <div className="category-image">
                    <img src={Equipment} alt="medical-equipment" />
                  </div>
                  <h3 className="category-heading">Medical equipment/supplies</h3>
                  <p>This category is mainly for hospitals in need of hospital equipments.</p>
                  <Link to="/equipment-description">
                    <button className="btn text-sm w-[100%]">Click here to view more</button>
                  </Link>
                </div>
              </div>
              <div className="category-info">
                <div className="category-grid">
                  <div className="category-image">
                    <img src={Assistance} alt="medical-funds" />
                  </div>
                  <h3 className="category-heading">Financial Assistance</h3>
                  <p>This category focuses on those in need of financial support as regards their health.</p>
                  <Link to="/financial-description">
                    <button className="btn text-sm w-[100%]">Click here to view more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="request-main">
            <div className="flex justify-center mb-5 font-bold text-[35px]">
              <p>Top Medical Requests</p>
            </div>
            <div className="request-list">
              <div className="request-info">
                <div className="request-image mb-[10px]">
                  <img src={Request} alt="requests"></img>
                </div>
                <div className="location w-[90%]">
                  <div className="w-[20%]">
                    <img src={Location} alt="location-icon"></img>
                  </div>
                  <h2 className="text-[15px]">Philadelphia, USA</h2>
                </div>
                <p className="text-[22px] font-bold">Donate a Kidney to Mary</p>
                <p className="text-[15px] mt-2">Mary is a 7year old girl from... <a href="#">See more</a></p>
                <button className="btn text-sm w-[100%]">Donate</button>
              </div>
              <div className="request-info">
                <div className="request-image mb-[10px]">
                  <img src={Medical} alt="requests"></img>
                </div>
                <div className="location w-[90%]">
                  <div className="w-[20%]">
                    <img src={Location} alt="location-icon"></img>
                  </div>
                  <h2 className="text-[15px]">Canada</h2>
                </div>
                <p className="text-[22px] font-bold">Martha needs blood</p>
                <p className="text-[15px] mt-2">Help martha by donating a pint of ... <a href="#">See more</a></p>
                <button className="btn text-sm w-[100%]">Donate</button>
              </div>
              <div className="request-info">
                <div className="request-image mb-[10px]">
                  <img src={Breath} alt="requests"></img>
                </div>
                <div className="location w-[90%]">
                  <div className="w-[20%]">
                    <img src={Location} alt="location-icon"></img>
                  </div>
                  <h2 className="text-[15px]">Abuja, Nigeria</h2>
                </div>
                <p className="text-[22px] font-bold">Help baby Joshua breath</p>
                <p className="text-[15px] mt-2">Joshua was born with inability... <a href="#">See more</a></p>
                <button className="btn text-sm w-[100%]">Donate</button>
              </div>
              <div className="request-info">
                <div className="request-image mb-[10px]">
                  <img src={Finance} alt="requests"></img>
                </div>
                <div className="location w-[90%]">
                  <div className="w-[20%]">
                    <img src={Location} alt="location-icon"></img>
                  </div>
                  <h2 className="text-[15px]">Philadelphia, USA</h2>
                </div>
                <p className="text-[22px] font-bold">Felix needs blood urgently</p>
                <p className="text-[15px] mt-2">Help Felix a young... <a href="#">See more</a></p>
                <button className="btn text-sm w-[100%]">Donate</button>
              </div>
              <div className="request-info">
                <div className="request-image mb-[10px]">
                  <img src={Request} alt="requests"></img>
                </div>
                <div className="location w-[90%]">
                  <div className="w-[20%]">
                    <img src={Location} alt="location-icon"></img>
                  </div>
                  <h2 className="text-[15px]">Rwanda</h2>
                </div>
                <p className="text-[22px] font-bold">Donate a Kidney to Mary</p>
                <p className="text-[15px] mt-2">Mary is a 7year old girl from... <a href="#">See more</a></p>
                <button className="btn text-sm w-[100%]">Donate</button>
              </div>
              <div className="request-info">
                <div className="request-image mb-[10px]">
                  <img src={Request} alt="requests"></img>
                </div>
                <div className="location w-[90%]">
                  <div className="w-[20%]">
                    <img src={Location} alt="location-icon"></img>
                  </div>
                  <h2 className="text-[15px]">Denmark, UK</h2>
                </div>
                <p className="text-[22px] font-bold">Donate a Kidney to Mary</p>
                <p className="text-[15px] mt-2">Mary is a 7year old girl from... <a href="#">See more</a></p>
                <button className="btn text-sm w-[100%]">Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalProfile;