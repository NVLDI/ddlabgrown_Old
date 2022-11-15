import React from 'react'
import "./Sidebar.css"
import {LineStyle,PersonOutline,Assessment,Email,Feedback,ManageAccounts,Report} from "@mui/icons-material"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className="sidebarWarapper">
            <div className="sidebarMenu"></div>
            <h2 className="sidebarTitle">DD Lab Admin Dashboard</h2>
            <ul className="sidebarList">
            <Link to="/home" className='link'>
                <li className="sidebarListItem active">
                <LineStyle className='sidebarIcon'/>
                Home
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Product</h3>
            <ul className="sidebarList">
                <Link to="/addproduct" className='link'>
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                 Product
                </li>
                </Link>
                <Link to="/productListing" className='link'>
                <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                Product Listing
                </li>
                </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Distributor</h3>
            <ul className="sidebarList">
            <Link to="/adddistributor" className='link'>
                <li className="sidebarListItem">
                <PersonOutline className='sidebarIcon'/>
                 Distributor
                </li>
                </Link>
                <Link to="/distributorlisting" className='link'>
                <li className="sidebarListItem">
                <Assessment className='sidebarIcon'/>
                D.Listing
                </li>
                </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Sales</h3>
            <ul className="sidebarList">
            <Link to="/sales" className='link'>
                <li className="sidebarListItem">
                <Email className='sidebarIcon'/>
                Order Cart
                </li>
            </Link>
            <Link to="/purchaseorder" className='link'>
                <li className="sidebarListItem">
                <Feedback className='sidebarIcon'/>
                 Purchase Order
                </li>
            </Link>
            <Link to="/purchaseorderlisting" className='link'>
                <li className="sidebarListItem">
                <Feedback className='sidebarIcon'/>
                Purchase Order Listing
                </li>
            </Link>
            <Link to="/createInvoice" className='link'>
                <li className="sidebarListItem">
                <Feedback className='sidebarIcon'/>
                 Invoice
                </li>
            </Link>
            <Link to="/invoicelisting" className='link'>
                <li className="sidebarListItem">
                <Feedback className='sidebarIcon'/>
                Invoice Listing
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Marketing</h3>
            <ul className="sidebarList">
            <Link to="/createCoupon" className='link'>
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Coupon
                </li>
            </Link>
            <Link to="/couponlisting" className='link'>
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Coupon Listing
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Payment</h3>
            <ul className="sidebarList">
            <Link to="/payment" className='link'>
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Payment
                </li>
            </Link>
            <Link to="/onlinepaymentListing" className='link'>
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Online Payment Listing
                </li>
            </Link>
            <Link to="/offlinepaymentListing" className='link'>
                <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                Offline Payment Listing
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Delivery</h3>
            <ul className="sidebarList">
            <Link to="/delivery" className='link'>
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                 Delivery Order
                </li>
            </Link>
            <Link to="/deliverylisting" className='link'>
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                Delivery Listing
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">After Sales service</h3>
            <ul className="sidebarList">
            <Link to="/AfterSalesService" className='link'>
                <li className="sidebarListItem">
                <ManageAccounts className='sidebarIcon'/>
                ASM Appointment
                </li>
            </Link>
            <Link to="/AfterSalesServiceListing" className='link'>
                <li className="sidebarListItem">
                <Report className='sidebarIcon'/>
                ASM Listing
                </li>
            </Link>
            </ul>
        </div>
    </div>
  )
}