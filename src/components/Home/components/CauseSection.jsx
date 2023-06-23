import React from "react";
import "./CouseSection.css";
import Cause1 from "../../../assets/couse2.jpg";
import education from "../../../assets/education.jpg";
import medical from "../../../assets/medical.jpg";
import { Link } from "react-router-dom";

function CauseSection() {
  return (
    <section className="popular-causes" id="couses">
      <div className="container">
        <h2>Popular Causes</h2>
        <p>
          Check out some of our most popular causes and join the fight for a
          better world today.
        </p>
        <div className="cause-cards">
          <div className="cause-card">
            <img src={Cause1} alt="Cause image" />
            <h3>Climate Change</h3>
            <p>
              Help protect our planet by supporting organizations that fight
              climate change and promote sustainable practices. fight for a
              better world today.
            </p>
            <Link to="donation-form" className="donate-button">
              Donate Now
            </Link>
          </div>
          <div className="cause-card">
            <img src={education} alt="Cause image" />
            <h3>Education</h3>
            <p>
              Support organizations that provide education and learning
              opportunities to those in need, and help build a brighter future
              for all.
            </p>
            <Link to="donation-form" className="donate-button">
              Donate Now
            </Link>
          </div>
          <div className="cause-card">
            <Link to="/medical-profile">
              <img src={medical} alt="Cause image" />
            </Link>
            <h3>Medical Support</h3>
            <p>
              "Health is Wealth". Support medical organizations to help save a life today.
            </p>
            <Link to="/medical-donation-form" className="donate-button">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CauseSection;
