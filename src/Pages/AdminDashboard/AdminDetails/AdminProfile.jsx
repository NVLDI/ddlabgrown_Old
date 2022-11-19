import React from 'react'
import Sidebar from "../../../Components/Sidebar/Sidebar"
import Topbar from "../../../Components/Topbar/Topbar";
import "./AdminProfile.css"

export default function AdminProfile() {
  return (
    <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    
    <h3 className="AdminClient">Admin Profile</h3>
    </div>
    </div>
  )
}
