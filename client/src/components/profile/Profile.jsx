import React from 'react'
import "./Profile.css"
import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import UserForm from '../../userform/Userform'

function Profile() {
  return (
    <div className='container'>
      <Sidebar />
      <div className="profile-content">
        <Header/>
        <UserForm/>
        
      </div>
    </div>
  )
}

export default Profile