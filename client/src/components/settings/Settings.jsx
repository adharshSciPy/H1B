import React, { useState } from 'react';
import "./Settings.css";
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import { CloseOutlined } from '@ant-design/icons';


function Settings() {
  const collaborators = [1, 2, 3, 4];
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className='settingsContainer'>
      <Sidebar />
      <div className="settings-content">
        <Header />
        <h1 className='settings-mainHeading'>Settings</h1>

        <div className="settings-buttonDiv">
          <button className='settings-button'>Add Collaborators</button>
        </div>

        <div className="settings-collaboratorList">
          {collaborators.map((item) => (
            <div className="settings-singleCollaborator" key={item}>
              <h6 className="settings-listHeading">Lorem</h6>
              <div className="settings-collaboratorButtons">
                <button
                  className='settings-collaboratorEdit'
                  onClick={() => setIsPopupVisible(true)}
                >
                  Edit
                </button>
                <button className='settings-collaboratorDelete'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup div */}
      {isPopupVisible && (
        <div className="settings-modaldiv">
             
          <div className="settingsModalDiv-content">
            {/* <div className="settings-popupCloseButton"> */}
            <CloseOutlined  onClick={() => setIsPopupVisible(false)} className="settings-popupCloseButton" />

            {/* </div> */}

            <h2>Edit Collaborator</h2>
           <form className='settings-collaboratorEditForm'>
           <div className="settings-formInputs">
            
            
           </div>
           </form>
          
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
