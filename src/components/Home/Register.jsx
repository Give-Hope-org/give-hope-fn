import React from "react";
import "./Register.css";
import signUp from "../../assets/signUp.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <div className="register-image">
        <img src={signUp} />
      </div>
      <div className="register-form">
        <Link
          to="/"
          className="flex items-center text-blue-700 hover:text-blue-800"
        >
          <i className="fas fa-arrow-left mr-1 text-blue-700"></i>
          <span className="text-blue-700">Go back to home</span>
        </Link>

        <h2>
          <span>Create an account! </span>
        </h2>
        <form>
          <div className="form-group">
            <label for="name">First name</label>
            <input type="text" id="fname" name="fname" required />
          </div>
          <div className="form-group">
            <label for="Last name">Last name</label>
            <input type="text" id="lname" name="lname" required />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label for="password">Confirm password</label>
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
              <i className="fab fa-google "></i>Register in with
              <span>Google</span>
            </button>
          </div>
          <div className="form-group">
            <span className="create-account-link">
              Have an account? <Link to="/register-as-individual">Login!</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
