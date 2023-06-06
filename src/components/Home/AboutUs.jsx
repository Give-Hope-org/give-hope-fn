import React from "react";
import help from "../../assets/help.jpg";
import "./AboutUs.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <section id="about" className="section">
        <div className="about-container">
          <header className="about-section-header">
            <h2 className="about-section-title">About Us</h2>
            <p className="about-section-tagline">Everything about us</p>
          </header>
          <div className="about-section-body">
            <div className="row">
              <div className="col-1-2">
                <img src={help} alt="" width="460" height="460" />
              </div>
              <div className="col-1-2">
                <h3>Who are we</h3>
                <p>
                  We are a non-profit organization dedicated to making a
                  positive impact in the world. Our mission is to support
                  various causes and charities, and to help those in need
                  through donations and fundraising!
                </p>
                <h3>Our culture</h3>
                <p>
                  We believe in a culture of kindness, compassion, and
                  generosity. We strive to make a difference in people's lives,
                  and to bring about positive change in the world. Our team is
                  made up of passionate individuals who share a common goal of
                  making a difference!
                </p>
                <h3>How we work</h3>
                <p>
                  We work tirelessly to identify and support causes and
                  charities that align with our values and mission. We partner
                  with organizations that have a proven track record of making a
                  positive impact in their communities. We rely on the
                  generosity of our donors to fund our efforts, and we are
                  committed to transparency and accountability in all that we
                  do!
                </p>
                <div className="about-section-footer">
                  <Link to="/about-us">
                    <button className="hero-butto">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
