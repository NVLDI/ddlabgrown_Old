import React from 'react'
import "./DeliveryWidget.css"

export default function DeliveryWidget() {
  return (
    <div className="DeliveryWidget">
        <h3 className="DeliveryWidgetTitle">Delivery</h3>
        <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Delivery No</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Invoice No</th>
          <th className="widgetLgTh">Purchase No</th>
          <th className="widgetLgTh">Delivery Method</th>
          <th className="widgetLgTh">Payment Type</th>
          <th className="widgetLgTh">Status</th>
        </tr>
      </table>
    </div>
  )
}
