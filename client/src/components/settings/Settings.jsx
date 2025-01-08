import React from 'react';
import "./Settings.css";
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';


function Settings() {
 //to map the divs.Replace when integrating
  const collaborators = [1, 2, 3, 4]; 

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
          {/* replace with state and map */}
          {collaborators.map((item) => (
            <div className="settings-singleCollaborator" key={item}>
              <h6 className="settings-listHeading">Lorem</h6>
              <div className="settings-collaboratorButtons">
                <button className='settings-collaboratorEdit' >Edit</button>
                <button className='settings-collaboratorDelete'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* dummy div to check the onClick */}
      <div className="dummydiv">
        haiii
      </div>
      
    </div>
  );
}

export default Settings;
