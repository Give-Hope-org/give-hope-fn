import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function HomeHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="GiveHope Logo" />
        </Link>
        <h1>GIVEHOPE</h1>
      </div>

      {/* Navigation links */}
      <ul className={`nav__menu ${showMenu ? "show" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#charities">Charities</a>
        </li>
        <li>
          <a href="#couses">Causes</a>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <div>
        <Link to="/login" className="nav-button">
          Login
        </Link>
      </div>
      {/* Hamburger menu */}
      <div className="nav__menu-icon" onClick={handleMenuClick}>
        <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

export default HomeHeader;
