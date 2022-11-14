import "./Product.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";

export default function Product(){
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
            <div className="Product">
            <h3 className="ProductWidgetClient">Add Product</h3>
            </div>
        </div>
        </div>
    )
}