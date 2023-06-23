import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function HomeHeader() {
  const [showMenu, setShowMenu] = useState(true);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterPopup(true);
  };

  const closeModal = () => {
    setShowRegisterPopup(false);
  };

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setShowMenu(visible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${showMenu ? "" : "hidden"}`}>
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="GiveHope Logo" />
        </Link>
        <h1>GIVEHOPE</h1>
      </div>

      {/* Navigation links */}
      <ul className={`nav__menu ${showMobileMenu ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={handleMobileMenuToggle}>
            Home
          </Link>
        </li>
        <li>
          <a href="#charities" onClick={handleMobileMenuToggle}>
            Charities
          </a>
        </li>
        <li>
          <a href="#causes" onClick={handleMobileMenuToggle}>
            Causes
          </a>
        </li>
        <li>
          <Link to="/about-us" onClick={handleMobileMenuToggle}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={handleMobileMenuToggle}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <button
          to="/register"
          className="nav-button"
          onClick={handleRegisterClick}
        >
          Register
        </button>
        <Link to="/login" className="nav-button">
          Login
        </Link>
      </div>
      {/* Hamburger menu */}
      <div className="nav__menu-icon" onClick={handleMobileMenuToggle}>
        <i className="fas fa-bars"></i>
      </div>

      {showRegisterPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="register-popup bg-white rounded-md p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Register as:</h2>
            <div className="flex gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
                onClick={() => {
                  window.location.href = "/register-as-org";
                }}
              >
                Organization
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
                onClick={() => {
                  window.location.href = "/register-as-individual";
                }}
              >
                Individual
              </button>
            </div>
            <button
              className="text-gray-600 hover:text-gray-800 font-semibold mt-4"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default HomeHeader;
