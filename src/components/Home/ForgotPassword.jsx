import React from "react";
import "./ForgotPassword.css";
import reset from "../../assets/reset.svg";

function ForgotPassword() {
  return (
    <div className="forgotpassword-container1">
      <div className="forgotpassword-container">
        <div className="forgotpassword-image">
          <img src={reset} />
        </div>
        <div className="forgotpassword-form">
          <h2>Forgot a password!</h2>
          <form>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <button className="btn-forgotpassword" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
