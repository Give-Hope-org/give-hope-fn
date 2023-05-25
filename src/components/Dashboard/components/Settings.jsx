import React from "react";
import "./Settings.css";
import setting from "../../../assets/setting.svg";
function Settings() {
  return (
    <div className="settings-container">
      <img src={setting} alt="settings" />
      <form>
        <h2>Settings</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="save-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Settings;
