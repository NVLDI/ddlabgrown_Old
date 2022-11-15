import React from 'react'
import Sidebar from "../../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../../Components/Topbar/Topbar";
import "./PurchaseOrder.css"
export default function PurchaseOrder() {
  return (
    <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
        <div className="purchaseOrder">
          <h2 className="purchaseWidgetClient">Purchase Order</h2>
    </div>
    </div>
    </div>
  )
}
