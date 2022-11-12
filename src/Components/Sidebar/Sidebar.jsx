import React from 'react'
import "./Sidebar.css"
import {LineStyle,PersonOutline,Category,Paid,Assessment,Email,Feedback,ManageAccounts,Report} from "@mui/icons-material"
export default function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className="sidebarWarapper">
            <div className="sidebarMenu"></div>
            <h2 className="sidebarTitle">DD Lab Admin Dashboard</h2>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                <LineStyle className='sidebarIcon'/>
                Home
                </li>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Product</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Add Product
                </li>
                <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                Product Listing
                </li>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Distributor</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <PersonOutline className='sidebarIcon'/>
                Distributor Register
                </li>
                <li className="sidebarListItem">
                <Category className='sidebarIcon'/>
                D.Network
                </li>
                <li className="sidebarListItem">
                <Paid className='sidebarIcon'/>
                D.Bonus
                </li>
                <li className="sidebarListItem">
                <Assessment className='sidebarIcon'/>
                D.Reports
                </li>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Sales</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <Email className='sidebarIcon'/>
                Ordering
                </li>
                <li className="sidebarListItem">
                <Feedback className='sidebarIcon'/>
                Product Info
                </li>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Marketing</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Coupon
                </li>
                <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                Promotion
                </li>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Payment</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Online
                </li>
                <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                Offline
                </li>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Delivery</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Self-Pickup
                </li>
                <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                Courier Service
                </li>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">After Sales service</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Appointment
                </li>
                <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                Report
                </li>
            </ul>
        </div>
    </div>
  )
}