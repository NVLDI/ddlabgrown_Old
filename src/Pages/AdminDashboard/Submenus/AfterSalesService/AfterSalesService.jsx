import "./AfterSalesService.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";

export default function AfterSalesService(){
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
            <div className="AfterSalesService">
            <h3 className="AfterSalesServiceWidgetClient">Hello welcome AfterSalesService</h3>
                    
            </div>
        </div>
        </div>
    )
}