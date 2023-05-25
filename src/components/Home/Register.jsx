import React from "react";
import "./Register.css";
import gift from "../../assets/gift.svg";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register-container">
      <div className="register-image">
        <img src={gift} />
      </div>
      <div className="register-form">
        <h2>
          <span>Create an account! </span>
        </h2>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="Tel">Telephone</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button className="btn-register" type="submit">
              register
            </button>
          </div>
          <div className="form-group">
            <span className="divider">or</span>
          </div>
          <div className="form-group">
            <button className="btn-google" type="button">
              <i className="fab fa-google "></i>Register in with{" "}
              <span>Google</span>
            </button>
          </div>
          <div className="form-group">
            <span className="create-account-link">
              Have an account? <Link to="/login">Login!</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
