import React from 'react';
import '../userform/userform.css';

function UserForm() {
  return (
  <div>
    <div className='head-name'>
      <h1>Hello Admin</h1>
    </div>

    
    
    <div className="outer-box">
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
            First name  :
            <input type="text" placeholder="Your First Name" />
          </label>
          <label>
            Second name :
            <input type="text" placeholder="Your Second Name" />
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
        <div class="email-item1">
  <i class="mail-icon"></i>
  <div class="email-text">
    <p>alexarawles@gmail.com</p>
    <span>1 month ago</span>
  </div>
</div>

          <button className="add-email-button1">+ Add Email Address</button>
      </div>
    </div>
    </div>
  );
}

export default UserForm;
