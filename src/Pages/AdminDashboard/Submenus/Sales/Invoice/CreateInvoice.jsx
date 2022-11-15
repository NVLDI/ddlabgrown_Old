import React from 'react'
import Sidebar from "../../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../../Components/Topbar/Topbar";
import "./CreateInvoice.css"

export default function CreateInvoice() {
  return (
    <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <div className="createInvoice">
          <h2 className="createInvoiceWidgetClient">Invoice</h2>
    </div>
    </div>
    </div>
  )
}
