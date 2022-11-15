import React from 'react'
import "./MarketingWidget.css"

export default function MarketingWidget() {
  return (
    <div className="MarketingWidget">
        <h3 className="MarketingWidgetTitle">Marketing</h3>
        <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Coupon No</th>
          <th className="widgetLgTh">Date Of Creation</th>
          <th className="widgetLgTh">Date Of Redraw</th>
          <th className="widgetLgTh">Invoice No</th>
          <th className="widgetLgTh">Distributor No</th>
          <th className="widgetLgTh">Invoice Amount</th>
          <th className="widgetLgTh">Discount Type</th>
          <th className="widgetLgTh">Discount Amount</th>
          <th className="widgetLgTh">Total</th>
          <th className="widgetLgTh">Create By</th>
        </tr>
       
      </table>
    </div>
  )
}
