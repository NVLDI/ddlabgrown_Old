import React from 'react'
import "./widgetLg.css"

export default function widgetLg() {

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Order Details</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">PO No</th>
          <th className="widgetLgTh">Product Code</th>
          <th className="widgetLgTh">Product Description</th>
          <th className="widgetLgTh">Create By</th>
          <th className="widgetLgTh">Amend By</th>
          <th className="widgetLgTh">Amend Date</th>
        </tr>
      </table>
    </div>
  )
}
