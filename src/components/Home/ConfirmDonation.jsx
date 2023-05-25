import React from "react";
import "./ConfirmDonation.css";
import { Link } from "react-router-dom";
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";

function ConfirmDonation() {
  const donationAmount = 50;
  const confirmationNumber = "#12345";

  // Define the URL to share
  const shareUrl = "https://example.com/donation-confirmation";

  // Define the donation message to share
  const donationMessage = `I just donated $${donationAmount} to a great cause! My confirmation number is ${confirmationNumber}. Join me in making a difference by donating today.`;
  return (
    <div className="confirmation-container">
      <h1>Thank You for Your Donation!</h1>
      <div className="confirmation">
        <p>Your donation of $50 has been received.</p>
        <p>
          Your confirmation number is: <strong>#12345</strong>
        </p>
        <p>A receipt has been sent to your email address.</p>
        <p>Thank you for your support!</p>

        <div className="social-buttons">
          <TwitterShareButton url={shareUrl} title={donationMessage}>
            <button className="twitter-button">
              <i className="fab fa-twitter"></i> Share on Twitter
            </button>
          </TwitterShareButton>
          <FacebookShareButton url={shareUrl} quote={donationMessage}>
            <button className="facebook-button">
              <i className="fab fa-facebook-f"></i> Share on Facebook
            </button>
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl} title={donationMessage}>
            <button className="linkedin-button">
              <i className="fab fa-linkedin"></i> Share on LinkedIn
            </button>
          </LinkedinShareButton>
        </div>
        <Link to="/">
          <button className="btn">Return to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmDonation;
