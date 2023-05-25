import React from "react";
import "./ContactUs.css";
import contact from "../../assets/contact.svg";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

function ContactUs() {
  return (
    <div>
      <HomeHeader />
      <div className="contactus-container1">
        <div className="contactus-container">
          <div className="contactus-image">
            <img src={contact} />
          </div>
          <div className="contactus-form">
            <h2>Contact Us</h2>
            <p>
              Do you have any questions or concerns? Please feel free to reach
              out to us using the contact form below.
            </p>
            <form>
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit" className="btn-contactus">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default ContactUs;
