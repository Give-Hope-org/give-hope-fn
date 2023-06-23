import React from 'react';
import { Link } from 'react-router-dom';
import Blood from '../../assets/bloodDonation.jpg';
import Location from '../../assets/location-logo.png';
import Request from '../../assets/requests.jpg';
import Medical from '../../assets/medical.jpg';
import Breath from '../../assets/breath.jpg';
import Finance from '../../assets/finance-request.jpg';
import './BloodDonationProfile.css';

function BloodDonationProfile () {
  return (
    <div className="blood-donation p-4">
      <div className="blood-donation-header">
        <h1>Blood Donation</h1>
        <div className="flex justify-center">
          <img src={Blood} alt="Blood" className="max-w-[50%] max-h-[50%] rounded-[40px] border-[10px]"></img>
        </div>
        <p className="font-bold text-[30px] mt-[40px]">Description:</p>
      </div>
      <div className="blood-donation-body">
        <p className="text-[20px] p-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia id vitae exercitationem pariatur ducimus nemo quidem maiores, mollitia cupiditate officiis soluta ipsa et dolores facilis similique corrupti. Molestiae, temporibus voluptates? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, deleniti vel maxime ea praesentium minus eligendi error tenetur magnam sapiente! Odio facere nobis veritatis aliquid in officia similique sequi qui?</p>
        <p className="text-[20px] p-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, exercitationem aperiam vitae ipsa iure atque minus, blanditiis minima asperiores consequuntur suscipit adipisci deserunt illum ut, quidem veniam recusandae nostrum delectus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio hic possimus quia. Molestias eum corporis odio. Laudantium incidunt molestiae, alias dignissimos quidem facilis aut minus perspiciatis voluptatibus, iusto distinctio eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit vel exercitationem ut fugit et, aspernatur dicta dolorem obcaecati vitae corporis voluptas eveniet voluptates numquam veniam aliquid quaerat ullam, sapiente assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga voluptas aperiam dolorem quo libero laborum eum laboriosam voluptates ipsa minus, placeat dolores veritatis, qui soluta, velit alias distinctio est!. <strong>Find below blood donation requests:</strong></p>
      </div>
      <div className="medical-donate">
        <Link to ="/blood-donation-form">
          <button className="btn">Donate</button>
        </Link>
        <Link to ="/blood-request-form">
          <button className="btn">Request for Donation</button>
        </Link>
      </div>
      <p className="text-[35px] font-bold text-center mt-[9rem] mb-[2rem]">Blood Donation Requests</p>
      <div className="donation-requests">
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
          <Link to ="/blood-donation-form">
            <button className="btn text-sm w-[100%]">Donate</button>
          </Link>
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
          <Link to ="/blood-donation-form">
            <button className="btn text-sm w-[100%]">Donate</button>
          </Link>
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
          <Link to ="/blood-donation-form">
            <button className="btn text-sm w-[100%]">Donate</button>
          </Link>
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
          <Link to ="/blood-donation-form">
            <button className="btn text-sm w-[100%]">Donate</button>
          </Link>
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
          <Link to ="/blood-donation-form">
            <button className="btn text-sm w-[100%]">Donate</button>
          </Link>
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
          <Link to ="/blood-donation-form">
            <button className="btn text-sm w-[100%]">Donate</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BloodDonationProfile;