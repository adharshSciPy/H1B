import React from 'react';
import "./Settings.css";
import Sidebar from '../sidebar/Sidebar';
// import { SearchOutlined } from '@ant-design/icons';
import Header from '../header/Header';

function Settings() {
  return (
    <div className='settingContainer'>
      <Sidebar />
      <div className="settings-content">
        {/* <div className="settings-searchBar">
          <SearchOutlined className="search-icon" />
          <input 
            type="text" 
            placeholder="Search here..." 
            className="search-input"
          />
        </div> */}
        <Header/>
        <h1 className='settings-mainHeading'>Settings</h1>
      </div>
    </div>
  );
}

export default Settings;
