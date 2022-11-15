import React from 'react'
import "./AfterSalesServiceWidget.css"

export default function AfterSalesServiceWidget() {
  return (
    <div className="AfterSalesServiceWidget">
        <h3 className="AfterSalesServiceWidgetTitle">After Sales Service</h3>
        <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">After Sales No</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Invoice No</th>
          <th className="widgetLgTh">Distributor No</th>
          <th className="widgetLgTh">Delivery Method</th>
          <th className="widgetLgTh">Payment Type</th>
          <th className="widgetLgTh">Status</th>
        </tr>
      </table>
    </div>
  )
}
