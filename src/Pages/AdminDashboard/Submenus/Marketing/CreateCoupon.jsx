import "./CreateCoupon.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";

export default function CreateCoupon(){
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
            <div className="CreateCoupon">
                    <h2 className="CreateCouponWidgetClient">
                        Coupon
                    </h2>
            </div>
            </div>
            </div>
    )
}