import React from 'react'
import "./Listing.css"
import Sidebar from '../sidebar/Sidebar'

function Listing() {
  return (
    <div className='container'>
    <Sidebar />
    <div className="listing-content">
      <h1>Listing</h1>
    </div>
  </div>
  )
}

export default Listing