import "./PaymentAmend.css"
import Sidebar from "../../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../../Components/Topbar/Topbar";

export default function PaymentAmend() {
  return (
    <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <div className="PaymentAmend">
        <h3 className="PaymentAmendWidgetClient">Offline Payment Amend</h3>
    </div>
    </div>
    </div>
  )
}
