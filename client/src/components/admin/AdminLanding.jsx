import React from 'react'
import Sidebar from '../sidebar/Sidebar.jsx'
import "./Adminlanding.css"

function AdminLanding() {
  return (
    <div className='container'>
      <Sidebar />
      <div className="admin-content">
        <h1>Admin Dashboard</h1>
      </div>
    </div>
  )
}

export default AdminLanding