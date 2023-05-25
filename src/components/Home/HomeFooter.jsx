/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HomeFooter.css";
import Logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row justify-content-center text-center text-md-left">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-map-marker" />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Kigali Rwanda!</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-phone" />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+250 785767647</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-envelope-open" />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>givehope@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={Logo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://twitter.com/GiveHope">
                    <i className="fab fa-twitter twitter-bg" />
                  </a>
                  <a href="https://instagram.com/GiveHope">
                    <i className="fab fa-instagram twitter-bg" />
                  </a>
                  <a href="https://google.com/givehope.com">
                    <i className="fab fa-google google-bg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Charties</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Couses</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright © {date}, All Right Reserved{" "}
                  <a
                    href="https://alvinfiston.me/"
                    style={{ textDecoration: "none" }}
                  >
                    Alvin Coder
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
