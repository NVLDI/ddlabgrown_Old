import React from 'react'
import Sidebar from "../../../Components/Sidebar/Sidebar"
import Topbar from "../../../Components/Topbar/Topbar";

export default function AdminProfile() {
  return (
    <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <div className="AfterSalesServiceAmend">
    <h3 className="ProductAmendWidgetClient">Admin Profile</h3>
    </div>
    </div>
    </div>
  )
}
