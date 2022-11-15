import React from 'react'
import "./Sidebar.css"
import InventoryIcon from '@mui/icons-material/Inventory';
import ListIcon from '@mui/icons-material/List';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import ReceiptIcon from '@mui/icons-material/Receipt';
import DiscountIcon from '@mui/icons-material/Discount';
import PaymentIcon from '@mui/icons-material/Payment';
import PaidIcon from '@mui/icons-material/Paid';
import ContactlessIcon from '@mui/icons-material/Contactless';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className="sidebarWarapper">
            <div className="sidebarMenu"></div>
            <h2 className="sidebarTitle">DD Lab Admin Dashboard</h2>
            <ul className="sidebarList">
            <Link to="/home" className='link'>
                <li className="sidebarListItem active">
                <HomeIcon className='sidebarIcon'/>
                Home
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Product</h3>
            <ul className="sidebarList">
                <Link to="/addproduct" className='link'>
                <li className="sidebarListItem">
                <InventoryIcon className='sidebarIcon'/>
                 Product
                </li>
                </Link>
                <Link to="/productListing" className='link'>
                <li className="sidebarListItem">
                <ListIcon className='sidebarIcon'/>
                Product Listing
                </li>
                </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Distributor</h3>
            <ul className="sidebarList">
            <Link to="/adddistributor" className='link'>
                <li className="sidebarListItem">
                <HowToRegIcon className='sidebarIcon'/>
                 Registration
                </li>
                </Link>
                <Link to="/distributorlisting" className='link'>
                <li className="sidebarListItem">
                <ListIcon className='sidebarIcon'/>
                Registration Listing
                </li>
                </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Sales</h3>
            <ul className="sidebarList">
            <Link to="/sales" className='link'>
                <li className="sidebarListItem">
                <BookmarkBorderIcon className='sidebarIcon'/>
                Order Cart
                </li>
            </Link>
            <Link to="/purchaseorder" className='link'>
                <li className="sidebarListItem">
                <ShoppingCartIcon className='sidebarIcon'/>
                 Purchase Order
                </li>
            </Link>
            <Link to="/purchaseorderlisting" className='link'>
                <li className="sidebarListItem">
                <ListIcon className='sidebarIcon'/>
                Purchase Order Listing
                </li>
            </Link>
            <Link to="/createInvoice" className='link'>
                <li className="sidebarListItem">
                <ReceiptIcon className='sidebarIcon'/>
                 Invoice
                </li>
            </Link>
            <Link to="/invoicelisting" className='link'>
                <li className="sidebarListItem">
                <ListIcon className='sidebarIcon'/>
                Invoice Listing
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Marketing</h3>
            <ul className="sidebarList">
            <Link to="/createCoupon" className='link'>
                <li className="sidebarListItem">
                <DiscountIcon className='sidebarIcon'/>
                Coupon
                </li>
            </Link>
            <Link to="/couponlisting" className='link'>
                <li className="sidebarListItem">
                <ListIcon className='sidebarIcon'/>
                Coupon Listing
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Payment</h3>
            <ul className="sidebarList">
            <Link to="/payment" className='link'>
                <li className="sidebarListItem">
                <PaymentIcon className='sidebarIcon'/>
                Payment
                </li>
            </Link>
            <Link to="/onlinepaymentListing" className='link'>
                <li className="sidebarListItem">
                <ContactlessIcon className='sidebarIcon'/>
                Online Payment Listing
                </li>
            </Link>
            <Link to="/offlinepaymentListing" className='link'>
                <li className="sidebarListItem">
                <PaidIcon className='sidebarIcon'/>
                Offline Payment Listing
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">Delivery</h3>
            <ul className="sidebarList">
            <Link to="/delivery" className='link'>
                <li className="sidebarListItem">
                <LocalShippingIcon className='sidebarIcon'/>
                 Delivery Order
                </li>
            </Link>
            <Link to="/deliverylisting" className='link'>
                <li className="sidebarListItem">
                <ListIcon className='sidebarIcon'/>
                Delivery Listing
                </li>
            </Link>
            </ul>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle">After Sales service</h3>
            <ul className="sidebarList">
            <Link to="/AfterSalesService" className='link'>
                <li className="sidebarListItem">
                <HomeRepairServiceIcon className='sidebarIcon'/>
                ASM Appointment
                </li>
            </Link>
            <Link to="/AfterSalesServiceListing" className='link'>
                <li className="sidebarListItem">
                <ListIcon className='sidebarIcon'/>
                ASM Listing
                </li>
            </Link>
            </ul>
        </div>
    </div>
  )
}