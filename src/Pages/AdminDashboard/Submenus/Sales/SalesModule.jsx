import "./SalesModule.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";

export default function SalesModule(){
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
            <div className="Sales">
            <h3 className="SalesWidgetClient">Hello welcome to Sales page</h3>
            </div>
        </div>
        </div>
    )
}