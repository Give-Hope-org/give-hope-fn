import React from "react";
import "./CouseSection.css";
import Cause1 from "../../../assets/couse2.jpg";
import education from "../../../assets/education.jpg";
import human from "../../../assets/human.jpg";
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
            <img src={human} alt="Cause image" />
            <h3>Human Rights</h3>
            <p>
              Stand up for justice and equality by supporting organizations that
              defend human rights and promote diversity and inclusion.
            </p>
            <Link to="donation-form" className="donate-button">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CauseSection;
