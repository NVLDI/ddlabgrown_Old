import "./Payment.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";

export default function Payment(){
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
            <div className="Payment">
                    <h2 className="PaymentWidgetClient">Payment</h2>
            </div>
        </div>
        </div>
    )
}