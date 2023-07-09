import React from "react";
import "./Login.css";
import log from "../../assets/LogIn.png";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div className="login-container flex mt-10 ">
        <div className="login-image w-1/2">
          <img src={log} />
        </div>
        <div className="login-form w-1/2">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <button className="btn-login" type="submit">
                Login
              </button>
            </div>
            <div className="form-group">
              <span className="divider">or</span>
            </div>
            <div className="form-group">
              <button className="btn-google" type="button">
                <i className="fab fa-google "></i>Sign in with{" "}
                <span>Google</span>
              </button>
            </div>
            <div className="form-group">
              <span className="create-account-link">
                Don't have an account? <Link to="/register">Register!</Link>
              </span>
            </div>
            <div className="form-group">
              <span className="forgot-password-link">
                <Link to="/forgot-password">Forgot Password?</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
