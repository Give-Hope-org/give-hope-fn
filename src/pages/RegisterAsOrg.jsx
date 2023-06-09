import React from "react";
import "../components/Home/Register.css";
import gift from "../assets/gift.svg";
import { Link } from "react-router-dom";
function RegisterAsOrg() {
  return (
    <div className="register-container">
      <div className="register-image">
        <img src={gift} />
      </div>
      <div className="register-form">
        <Link
          to="/"
          className="flex items-center text-primary hover:text-blue-800"
        >
          <i className="fas fa-arrow-left mr-1 text-blue-700"></i>
          <span className="text-blue-700">Go back to home</span>
        </Link>

        <h2>
          <span>Create an account! </span>
        </h2>
        <form>
          <div className="form-group">
            <label for="name">Organization name</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="email">Organization email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="Tel">Organization description</label>
            <textarea
  id="w3review"
  name="w3review"
  rows="4"
  cols="50"
  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-500"
>
  Organization description with a help text that displays an example or just a text that explains what should be filled in.
</textarea>
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

export default RegisterAsOrg;
