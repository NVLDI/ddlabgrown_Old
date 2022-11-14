import './App.css';
import Topbar from "./Components/Topbar/Topbar"
import SideBar from "./Components/Sidebar/Sidebar"
import Home from "./Pages/AdminDashboard/Home/Home"
import Distributor from "./Pages/AdminDashboard/Submenus/Distributor/Distributor"
import Sales from "./Pages/AdminDashboard/Submenus/Sales/SalesModule"
import Marketing from "./Pages/AdminDashboard/Submenus/Marketing/Marketing"
import Payment from "./Pages/AdminDashboard/Submenus/Payment/Payment"
import Delivery from "./Pages/AdminDashboard/Submenus/Delivery/Delivery"
import AfterSalesService from "./Pages/AdminDashboard/Submenus/AfterSalesService/AfterSalesService"
import DistributorListing from "./Pages/AdminDashboard/Submenus/Distributor/DistributorListing"
import PurchaseOrderListing from "./Pages/AdminDashboard/Submenus/Sales/PurchaseOrderListing"
import AfterSalesServiceListing from "./Pages/AdminDashboard/Submenus/AfterSalesService/AfterSalesServiceListing"
import DeliveryListing from "./Pages/AdminDashboard/Submenus/Delivery/DeliveryListing"
import PaymentListing from "./Pages/AdminDashboard/Submenus/Payment/PaymentListing"
import CouponListing from "./Pages/AdminDashboard/Submenus/Marketing/CouponListing"
import InvoiceListing from "./Pages/AdminDashboard/Submenus/Sales/InvoiceListing"
import ProductListing from "./Pages/AdminDashboard/Submenus/Product/ProductListing"
import ProductAmend from "./Pages/AdminDashboard/Submenus/Product/ProductAmend"
import AfterSalesServiceAmend from "./Pages/AdminDashboard/Submenus/AfterSalesService/AfterSalesServiceAmend"
import DeliveryAmend from './Pages/AdminDashboard/Submenus/Delivery/DeliveryAmend';
import NotFound from "./Pages/Error/404Page"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CouponAmend from './Pages/AdminDashboard/Submenus/Marketing/CouponAmend';
import PaymentAmend from './Pages/AdminDashboard/Submenus/Payment/PaymentAmend';
import InvoiceAmend from './Pages/AdminDashboard/Submenus/Sales/InvoiceAmend';
import PurchaseOrderAmend from './Pages/AdminDashboard/Submenus/Sales/PurchaseOrderAmend';
import Frontpage from './Pages/Webpage/Frontpage';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import DistributorLogin from './Pages/DistributorLogin/DistributorLogin';
import AddProduct from "./Pages/AdminDashboard/Submenus/Product/Product";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
      <SideBar/>
      <Routes>
      <Route exact path="/ff" element={<Frontpage/>}/>

      <Route exact path = "/" element={<AdminLogin/>}/>
      <Route exact path ="/distributorLogin" element={<DistributorLogin/>}/>

      <Route exact path="/home" element={<Home/>}/>

      <Route exact path="/distributor" element={<Distributor/>}/>
      <Route exact path="/sales" element={<Sales/>}/>
      <Route exact path="/marketing" element={<Marketing/>}/>
      <Route exact path="/payment" element={<Payment/>}/>
      <Route exact path="/delivery" element={<Delivery/>}/>
      <Route exact path="/aftersalesservice" element={<AfterSalesService/>}/>
      <Route exact path="/addproduct" element={<AddProduct/>}/>

      <Route exact path="/distributorListing" element={<DistributorListing/>}/>
      <Route exact path="/purchaseorderlisting" element={<PurchaseOrderListing/>}/>
      <Route exact path="/afterSalesServicelisting" element={<AfterSalesServiceListing/>}/>
      <Route exact path="/deliveryListing" element={<DeliveryListing/>}/>
      <Route exact path="/paymentListing" element={<PaymentListing/>}/>
      <Route exact path="/couponListing" element={<CouponListing/>}/>
      <Route exact path="/InvoiceListing" element={<InvoiceListing/>}/>
      <Route exact path="/productListing" element={<ProductListing/>}/>
      
      <Route exact path="/productAmend/:productid" element={<ProductAmend/>}/>
      <Route exact path="/AfterSalesServiceAmend/:AfterSalesServiceid" element={<AfterSalesServiceAmend/>}/>
      <Route exact path="/deliveryAmend/:deliveryAmendid" element={<DeliveryAmend/>}/>
      <Route exact path="/couponAmend/:couponAmendid" element={<CouponAmend/>}/>
      <Route exact path="/paymentAmend/:paymentAmendid" element={<PaymentAmend/>}/>
      <Route exact path="/invoiceAmend/:invoiceAmendid" element={<InvoiceAmend/>}/>
      <Route exact path="/purchaseOrderAmend/:purchaseOrderAmendid" element={<PurchaseOrderAmend/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      </div>
    
    </Router>
  );
}

export default App;
