import React from "react";
import "./CharitySection.css";
import charity1 from "../../../assets/charity1.jpg";
import charity2 from "../../../assets/charity2.jpg";
import charity3 from "../../../assets/charity3.jpg";
import { Link } from "react-router-dom";
function CharitySection() {
  return (
    <div className="charity-container" id="charities">
      <h2>Featured Charities</h2>
      <p>
        Explore our featured charities below and find a cause to support today!
      </p>
      <div className="featured-charities">
        <div className="charity">
          <div className="charity-image">
            <Link to="/charity-profile">
              <img src={charity1} alt="Charity 1" />
            </Link>
          </div>
          <div className="charity-info">
            <h3>Kigali Genocide Memorial!</h3>
            <p>
              The Kigali Genocide Memorial's mission is to provide a dignified
              burial place for victims of the 1994 genocide in Rwanda and to
              educate visitors on the causes and consequences of genocide.
            </p>
            <Link to="donation-form" className="donate-button">
              Donate Now
            </Link>
          </div>
        </div>

        <div className="charity">
          <div className="charity-image">
            <img src={charity2} alt="Charity 2" />
          </div>
          <div className="charity-info">
            <h3>Ghana Red Cross Society</h3>
            <p>
              To provide humanitarian services to the most vulnerable in Ghana
              through mobilization of resources, skills and knowledge.
            </p>
            <Link to="donation-form" className="donate-button">
              Donate Now
            </Link>
          </div>
        </div>

        <div className="charity">
          <div className="charity-image">
            <img src={charity3} alt="Charity 3" />
          </div>
          <div className="charity-info">
            <h3>The Nigerian Red Cross Society</h3>
            <p>
              To prevent and alleviate human suffering, protect life and health,
              and uphold human dignity especially during armed conflicts and
              other emergencies.
            </p>
            <Link to="donation-form" className="donate-button">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharitySection;
