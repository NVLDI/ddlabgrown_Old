import React from 'react'
import SideNav,{Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
import "./Sidebar.css"

export default function Sidebar() {
  return (
   <SideNav
    onSelect={(selected) => {
        // Add your code here
        console.log(selected)
    }}
    className="Mysidebar"
> 
<SideNav.Toggle />
<SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="product">
            <NavIcon>
            <i class="fa-sharp fa-solid fa-star" style={{ fontSize: '1.5em' }}></i>
            </NavIcon>
            <NavText>
                Product
            </NavText>
            <NavItem eventKey="AddProduct">
            <NavText>
                Add Product
            </NavText>
            </NavItem> 
            <NavItem eventKey="ProductList">
            <NavText>
                Product listing
            </NavText>
            </NavItem> 
        </NavItem>
        <NavItem eventKey="distributor">
            <NavIcon>
            <i class="fa-solid fa-building-circle-arrow-right" style={{ fontSize: '1.5em' }}></i>
            </NavIcon>
            <NavText>
                Distributor
            </NavText>
            <NavItem eventKey="AddDiss">
            <NavText>
                Add Distributor
            </NavText>
            </NavItem> 
            <NavItem eventKey="DisList">
            <NavText>
                Distributor listing
            </NavText>
            </NavItem> 
        </NavItem>
        <NavItem eventKey="sales">
            <NavIcon>
            <i class="fa-brands fa-salesforce" style={{ fontSize: '1.5em' }}></i>
            </NavIcon>
            <NavText>
                Sales
            </NavText>
            <NavItem eventKey="OrderCart">
            <NavText>
                Order Cart
            </NavText>
            </NavItem> 
            <NavItem eventKey="PurchaseOrder">
            <NavText>
                Purchase Order
            </NavText>
            </NavItem> 
            <NavItem eventKey="PoList">
            <NavText>
                Purchase Order Listing
            </NavText>
            </NavItem> 
            <NavItem eventKey="Invoice">
            <NavText>
               Invoice
            </NavText>
            </NavItem> 
            <NavItem eventKey="InvoiceList">
            <NavText>
               Invoice Listing
            </NavText>
            </NavItem> 
        </NavItem>
        <NavItem eventKey="marketing">
            <NavIcon>
            <i class="fa-regular fa-lightbulb" style={{ fontSize: '1.5em' }}></i>
            </NavIcon>
            <NavText>
                Marketing
            </NavText>
            <NavItem eventKey="coupon">
            <NavText>
               Coupon
            </NavText>
            </NavItem> 
            <NavItem eventKey="CouponList">
            <NavText>
               Coupon Listing
            </NavText>
            </NavItem> 
        </NavItem>
        <NavItem eventKey="payment">
            <NavIcon>
            <i class="fa-solid fa-money-check-dollar" style={{ fontSize: '1.5em' }}></i>
            </NavIcon>
            <NavText>
                Payment
            </NavText>
            <NavItem>
            <NavText>
               Payment
            </NavText>
            </NavItem> 
            <NavItem eventKey="OnlinePay">
            <NavText>
               Online Payment Listing
            </NavText>
            </NavItem> 
            <NavItem eventKey="OffLinePay">
            <NavText>
               Offline Payment Listing
            </NavText>
            </NavItem> 
        </NavItem>
        <NavItem eventKey="delivery">
            <NavIcon>
            <i class="fa-solid fa-truck" style={{ fontSize: '1.5em' }}></i>
            </NavIcon>
            <NavText>
                Delivery
            </NavText>
            <NavItem eventKey="DeliveryOrder">
            <NavText>
                Delivery Order
            </NavText>
            </NavItem> 
            <NavItem eventKey="DeliveryList">
            <NavText>
                Delivery Listing
            </NavText>
            </NavItem> 
        </NavItem>
        <NavItem eventKey="afterSales">
            <NavIcon>
            <i class="fa-brands fa-ups" style={{ fontSize: '1.9em' }}></i>
            </NavIcon>
            <NavText>
                After Sales Service
            </NavText>
            <NavItem eventKey="afterSalesAppointment">
            <NavText>
            ASM Appointment
            </NavText>
            </NavItem> 
            <NavItem eventKey="afterSalesListing">
            <NavText>
            After Sales Service Listing
            </NavText>
            </NavItem> 
        </NavItem>
    </SideNav.Nav>
    </SideNav>
  )
}