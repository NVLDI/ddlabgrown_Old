import React from 'react'
import "./PaymentWidget.css"

export default function PaymentWidget() {
  return (
    <div className="PaymentWidget">
        <h3 className="PaymentWidgetTitle">Payments</h3>
        <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Transcation No</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Invoice No</th>
          <th className="widgetLgTh">Purchase No</th>
          <th className="widgetLgTh">Payment Method</th>
          <th className="widgetLgTh">Payment Type</th>
          <th className="widgetLgTh">Crytro Currency</th>
          <th className="widgetLgTh">Status</th>
        </tr>
      </table>
    </div>
  )
}
