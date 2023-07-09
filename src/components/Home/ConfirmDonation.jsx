import React from "react";
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Thank You for Your Donation!</h1>
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="mb-4">Your donation of ${donationAmount} has been received.</p>
        <p className="mb-4">
          Your confirmation number is: <strong className="text-blue-600">{confirmationNumber}</strong>
        </p>
        <p className="mb-4">A receipt has been sent to your email address.</p>
        <p className="mb-8">Thank you for your support!</p>

        <div className="space-x-4">
          <TwitterShareButton url={shareUrl} title={donationMessage}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              <i className="fab fa-twitter mr-2"></i> Share on Twitter
            </button>
          </TwitterShareButton>
          <FacebookShareButton url={shareUrl} quote={donationMessage}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              <i className="fab fa-facebook-f mr-2"></i> Share on Facebook
            </button>
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl} title={donationMessage}>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg">
              <i className="fab fa-linkedin mr-2"></i> Share on LinkedIn
            </button>
          </LinkedinShareButton>
        </div>

        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-8 rounded-lg">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmDonation;
