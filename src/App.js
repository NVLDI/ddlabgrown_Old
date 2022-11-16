import './App.css';
import Home from "./Pages/AdminDashboard/Home/Home"
import Distributor from "./Pages/AdminDashboard/Submenus/Distributor/AddDistributor"
import Sales from "./Pages/AdminDashboard/Submenus/Sales/OrderCart/SalesModule"
import CreateCoupon from "./Pages/AdminDashboard/Submenus/Marketing/CreateCoupon"
import Payment from "./Pages/AdminDashboard/Submenus/Payment/Payment"
import Delivery from "./Pages/AdminDashboard/Submenus/Delivery/Delivery"
import AfterSalesService from "./Pages/AdminDashboard/Submenus/AfterSalesService/AfterSalesService"
import DistributorListing from "./Pages/AdminDashboard/Submenus/Distributor/DistributorListing"
import PurchaseOrderListing from "./Pages/AdminDashboard/Submenus/Sales/PurchaseOrder/PurchaseOrderListing"
import AfterSalesServiceListing from "./Pages/AdminDashboard/Submenus/AfterSalesService/AfterSalesServiceListing"
import DeliveryListing from "./Pages/AdminDashboard/Submenus/Delivery/DeliveryListing"
import OnlinePaymentListing from "./Pages/AdminDashboard/Submenus/Payment/OnlinePayment/PaymentListing"
import OfflinePaymentListing from "./Pages/AdminDashboard/Submenus/Payment/OfflinePayment/PaymentListing"
import CouponListing from "./Pages/AdminDashboard/Submenus/Marketing/CouponListing"
import InvoiceListing from "./Pages/AdminDashboard/Submenus/Sales/Invoice/InvoiceListing"
import ProductListing from "./Pages/AdminDashboard/Submenus/Product/ProductListing"
import ProductAmend from "./Pages/AdminDashboard/Submenus/Product/ProductAmend"
import AfterSalesServiceAmend from "./Pages/AdminDashboard/Submenus/AfterSalesService/AfterSalesServiceAmend"
import DeliveryAmend from './Pages/AdminDashboard/Submenus/Delivery/DeliveryAmend';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CouponAmend from './Pages/AdminDashboard/Submenus/Marketing/CouponAmend';
import OnlinePaymentAmend from './Pages/AdminDashboard/Submenus/Payment/OnlinePayment/PaymentAmend';
import OfflinePaymentAmend from './Pages/AdminDashboard/Submenus/Payment/OfflinePayment/PaymentAmend';
import InvoiceAmend from './Pages/AdminDashboard/Submenus/Sales/Invoice/InvoiceAmend';
import PurchaseOrderAmend from './Pages/AdminDashboard/Submenus/Sales/PurchaseOrder/PurchaseOrderAmend';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import DistributorLogin from './Pages/DistributorLogin/DistributorLogin';
import AddProduct from "./Pages/AdminDashboard/Submenus/Product/Product";
import AboutUs from "./Pages/Webpage/AboutUs/AboutUs"
import ContactUs from "./Pages/Webpage/ContactUs/ContactUs"
import Service from "./Pages/Webpage/Service/Service"
import Display from './Pages/Webpage/Display/Display';
import DistributorAmend from './Pages/AdminDashboard/Submenus/Distributor/DistributorAmend';
import DistributorHomepage from './Pages/DistributorDashboard/Home/Home'
import AdminProfile from './Pages/AdminDashboard/AdminDetails/AdminProfile'
import DistributerProfile from './Pages/DistributorDashboard/DistributorProfile/DistributorProfile';
import PurchaseOrder from './Pages/AdminDashboard/Submenus/Sales/PurchaseOrder/PurchaseOrder';
import CreateInvoice from './Pages/AdminDashboard/Submenus/Sales/Invoice/CreateInvoice';
import Error from "./Pages/Error/404Page";
function App() {
  return (
    <Router>
     
      <Routes>
      <Route exact path="/adminprofile" element={<AdminProfile/>}/>
      <Route exact path="/distributorprofile" element={<DistributerProfile/>}/>

      <Route exact path="/" element={<Display/>}/>
      <Route exact path="/Error" element={<Error/>}/>
      <Route exact path = "/adminlogin" element={<AdminLogin/>}/>
      <Route exact path ="/distributorLogin" element={<DistributorLogin/>}/>
      <Route exact path ="/aboutus" element={<AboutUs/>}/>
      <Route exact path = "/contactus" element={<ContactUs/>}/>
      <Route exact path = "/service" element={<Service/>}/>

      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/distributorHomepage" element={<DistributorHomepage/>}/>
      <Route exact path="/sales" element={<Sales/>}/>
      <Route exact path="/createCoupon" element={<CreateCoupon/>}/>
      <Route exact path="/purchaseOrder" element={<PurchaseOrder/>}/>
      <Route exact path="/createInvoice" element={<CreateInvoice/>}/>
      <Route exact path="/payment" element={<Payment/>}/>
      <Route exact path="/delivery" element={<Delivery/>}/>
      <Route exact path="/aftersalesservice" element={<AfterSalesService/>}/>

      <Route exact path="/addproduct" element={<AddProduct/>}/>
      <Route exact path="/adddistributor" element={<Distributor/>}/>

      <Route exact path="/distributorListing" element={<DistributorListing/>}/>
      <Route exact path="/purchaseorderlisting" element={<PurchaseOrderListing/>}/>
      <Route exact path="/afterSalesServicelisting" element={<AfterSalesServiceListing/>}/>
      <Route exact path="/deliveryListing" element={<DeliveryListing/>}/>
      <Route exact path="/onlinepaymentListing" element={<OnlinePaymentListing/>}/>
      <Route exact path="/offlinepaymentListing" element={<OfflinePaymentListing/>}/>
      <Route exact path="/couponListing" element={<CouponListing/>}/>
      <Route exact path="/InvoiceListing" element={<InvoiceListing/>}/>
      <Route exact path="/productListing" element={<ProductListing/>}/>


      <Route exact path="/productAmend/:productid" element={<ProductAmend/>}/>
      <Route exact path="/AfterSalesServiceAmend/:AfterSalesServiceid" element={<AfterSalesServiceAmend/>}/>
      <Route exact path="/deliveryAmend/:deliveryAmendid" element={<DeliveryAmend/>}/>
      <Route exact path="/couponAmend/:couponAmendid" element={<CouponAmend/>}/>
      <Route exact path="/onlinepaymentAmend/:paymentAmendid" element={<OnlinePaymentAmend/>}/>
      <Route exact path="/offlinepaymentAmend/:paymentAmendid" element={<OfflinePaymentAmend/>}/>
      <Route exact path="/invoiceAmend/:invoiceAmendid" element={<InvoiceAmend/>}/>
      <Route exact path="/purchaseOrderAmend/:purchaseOrderAmendid" element={<PurchaseOrderAmend/>}/>
      <Route exact path="/distributorAmend/:distributorAmendid" element={<DistributorAmend/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
