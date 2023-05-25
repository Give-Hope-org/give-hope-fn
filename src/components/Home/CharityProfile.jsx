import React from "react";
import kgmLogo from "../../assets/kgmLogo.jpg";
import "./CharityProfile.css";
import { Link } from "react-router-dom";

function CharityProfile() {
  return (
    <div className="charity-profile-container">
      <div className="charity-profile">
        <div className="charity-profile-header">
          <img src={kgmLogo} alt="Kigali Genocide Memorial" />
          <h2>Kigali Genocide Memorial</h2>
          <p>
            Mission: To provide a dignified burial place for victims of the 1994
            genocide in Rwanda and to educate visitors on the causes and
            consequences of genocide.
          </p>
        </div>

        <div className="charity-profile-info">
          <div className="financial-info">
            <h3>Financial Information</h3>
            <ul>
              <li>Annual Income: $1,000,000</li>
              <li>Expenses: $900,000</li>
              <li>Program Expenses: $700,000</li>
              <li>Administrative Expenses: $100,000</li>
              <li>Fundraising Expenses: $100,000</li>
              <li>Financial Ratio: 90%</li>
            </ul>
          </div>

          <div className="impact-info">
            <h3>Impact Information</h3>
            <ul>
              <li>
                Number of victims buried at Kigali Genocide Memorial: 250,000
              </li>
              <li>
                Number of visitors to Kigali Genocide Memorial each year:
                100,000
              </li>
              <li>
                Number of educational programs offered by Kigali Genocide
                Memorial each year: 50
              </li>
            </ul>
          </div>

          <div className="media-info">
            <h3>Media</h3>
            <iframe
              src="https://www.youtube.com/embed/example"
              title="Kigali Genocide Memorial Video"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/example"
              title="Kigali Genocide Memorial Video"
            ></iframe>
          </div>

          <div className="reviews-info">
            <h3>Reviews and Ratings</h3>
            <ul>
              <li>4.5 stars based on 100 reviews</li>
            </ul>
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li>Email: info@kgm.org</li>
              <li>Phone: 123-456-7890</li>
              <li>
                Address: Kigali Genocide Memorial, PO Box 123, Kigali, Rwanda
              </li>
              <li>Website: www.kgm.org</li>
              <li>
                Social Media:{" "}
                <a href="https://www.facebook.com/kigaligenocidememorial/">
                  Facebook
                </a>
                , <a href="https://twitter.com/Kigali_Memorial">Twitter</a>,{" "}
                <a href="https://www.instagram.com/kigaligenocidememorial/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="verification-info">
            <h3>Charity Verification</h3>
            <p>
              Kigali Genocide Memorial is a registered charity in Rwanda with
              the Rwanda Governance Board.
            </p>
          </div>
          <Link to="/donation-form">
            <button className="donate-button">Donate</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CharityProfile;
