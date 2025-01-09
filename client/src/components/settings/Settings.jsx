import React, { useState, useRef, useEffect } from "react";
import "./Settings.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { CloseOutlined } from "@ant-design/icons";
import "../../userform/userform.css";

function Settings() {
  const collaborators = [1, 2, 3, 4];
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const formRef = useRef(null); // Reference for scrolling

  // Scroll to the form when the popup is opened
  useEffect(() => {
    if (isPopupVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isPopupVisible]);

  return (
    <div className="settingsContainer">
      <Sidebar />
      <div className="settings-content">
        <Header />
        <h1 className="settings-mainHeading">Settings</h1>

        <div className="settings-buttonDiv">
          <button
            className="settings-button"
            onClick={() => setIsPopupVisible(true)}
          >
            Add Collaborators
          </button>
        </div>

        <div className="settings-collaboratorList">
          {collaborators.map((item) => (
            <div className="settings-singleCollaborator" key={item}>
              <h6 className="settings-listHeading">Lorem</h6>
              <div className="settings-collaboratorButtons">
                <button
                  className="settings-collaboratorEdit"
                  onClick={() => setIsPopupVisible(true)}
                >
                  Edit
                </button>
                <button className="settings-collaboratorDelete">Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Form below collaborator list */}
        {isPopupVisible && (
          <div className="settings-bottomForm" ref={formRef}>
            <div className="settingsModalDiv-content">
              <div className="outer-box" style={{ position: "relative" }}>
                <div className="close-icon-wrapper">
                  <CloseOutlined onClick={() => setIsPopupVisible(false)} />
                </div>
                <div className="form-container">
                  <div className="profile-header">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Profile"
                      className="profile-picture"
                    />
                    <div className="profile-info">
                      <h3>Alexa Rawles</h3>
                      <p>alexarawles@gmail.com</p>
                    </div>
                    <button className="edit-button">Edit</button>
                  </div>
                  <form className="form-grid">
                    <label>
                      First name:
                      <input type="text" placeholder="Your First Name" />
                    </label>
                    <label>
                      Last name:
                      <input type="text" placeholder="Your Last Name" />
                    </label>
                    <label>
                      Gender:
                      <select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                    </label>
                    <label>
                      Country:
                      <select>
                        <option>India</option>
                      </select>
                    </label>
                    <label>
                      Language:
                      <select>
                        <option>English</option>
                      </select>
                    </label>
                    <label>
                      Time Zone:
                      <select>
                        <option>IST</option>
                      </select>
                    </label>
                  </form>
                  <div className="email-section1">
                    <h4>MY EMAIL ADDRESS</h4>
                    <button className="save-button">Save</button>
                  </div>
                  <div className="email-item1">
                    <i className="mail-icon"></i>
                    <div className="email-text">
                      <p>alexarawles@gmail.com</p>
                      <span>1 month ago</span>
                    </div>
                  </div>
                  <button className="add-email-button1">+ Add Email Address</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
