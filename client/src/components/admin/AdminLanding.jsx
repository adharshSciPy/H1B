import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import "./Adminlanding.css";
import Header from "../header/Header";

function AdminLanding() {
  return (
    <div className="settingsContainer">
      <Sidebar />
      <div className="settings-content">
        <Header />
      </div>
    </div>
  );
}

export default AdminLanding;
