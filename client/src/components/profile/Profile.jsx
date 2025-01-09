import React from "react";
import "./Profile.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import UserForm from "../../userform/Userform";

function Profile() {
  return (
    <div className="settingsContainer">
      <Sidebar />
      <div className="settings-content">
        <div className="profile-content">
          <Header />
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default Profile;
