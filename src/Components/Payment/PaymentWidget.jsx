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
        <tr className="widgetLgTr">
          <td className="widgetLgTranc">000111232937287</td>
          <td className="widgetLgDate">5th jun 2021</td>
          <td className="widgetLgInvoiceNo">INV-000100</td>
          <td className="widgetLgPurchaseNo">PO-124356</td>
          <td className="widgetLgPaymentMethod">Offline</td>
          <td className="widgetLgPaymentType">Cash</td>
          <td className="widgetLgAmendDate">None</td>
          <td className="widgetLgAmendDate">Approved</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTranc">000111232937287</td>
          <td className="widgetLgDate">5th jun 2021</td>
          <td className="widgetLgInvoiceNo">INV-000100</td>
          <td className="widgetLgPurchaseNo">PO-124356</td>
          <td className="widgetLgPaymentMethod">Offline</td>
          <td className="widgetLgPaymentType">Cash</td>
          <td className="widgetLgAmendDate">None</td>
          <td className="widgetLgAmendDate">Approved</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTranc">000111232937287</td>
          <td className="widgetLgDate">5th jun 2021</td>
          <td className="widgetLgInvoiceNo">INV-000100</td>
          <td className="widgetLgPurchaseNo">PO-124356</td>
          <td className="widgetLgPaymentMethod">Offline</td>
          <td className="widgetLgPaymentType">Cash</td>
          <td className="widgetLgAmendDate">None</td>
          <td className="widgetLgAmendDate">Approved</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTranc">000111232937287</td>
          <td className="widgetLgDate">5th jun 2021</td>
          <td className="widgetLgInvoiceNo">INV-000100</td>
          <td className="widgetLgPurchaseNo">PO-124356</td>
          <td className="widgetLgPaymentMethod">Offline</td>
          <td className="widgetLgPaymentType">Cash</td>
          <td className="widgetLgAmendDate">None</td>
          <td className="widgetLgAmendDate">Approved</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTranc">000111232937287</td>
          <td className="widgetLgDate">5th jun 2021</td>
          <td className="widgetLgInvoiceNo">INV-000100</td>
          <td className="widgetLgPurchaseNo">PO-124356</td>
          <td className="widgetLgPaymentMethod">Offline</td>
          <td className="widgetLgPaymentType">Cash</td>
          <td className="widgetLgAmendDate">None</td>
          <td className="widgetLgAmendDate">Approved</td>
        </tr>
      </table>
    </div>
  )
}
