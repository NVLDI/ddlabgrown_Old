import "./ProductAmend.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
export default function ProductAmend() {
  return (
    <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <div className="ProductAmend">
      <h3 className="ProductAmendWidgetClient">Product Amend</h3>
    </div>
    </div>
    </div>
  )
}
