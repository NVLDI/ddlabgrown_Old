import React from 'react'
import Sidebar from "../../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../../Components/Topbar/Topbar";
import "./CreateInvoice.css"
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'No', width: 95 },
  {
    field: 'ProductCode',
    headerName: 'Product Code',
    width: 170,
    editable: false,
  },
  {
    field: 'ProductDes',
    headerName: 'Product Description',
    width: 205,
    editable: false,
  },
  {
    field: 'Qty',
    headerName: 'Qty',
    width: 100,
    editable: false,
  },
  {
    field: 'Price',
    headerName: 'Price',
    editable: false,
    width: 110,
  },
  {
    field: 'DType',
    headerName: 'D.Type',
    width: 130,
    editable: false,
  },
  {
    field: 'DAmount',
    headerName: 'D.Amt',
    width: 120,
    editable: false,
  },
  {
    field: 'NetAmt',
    headerName: 'N.Amt',
    width: 120,
    editable: false,
  },
];

const rows = [
  { id: '',ProductCode: '', ProductDes: '', Qty: '', Price: ''},
  
];
export default function CreateInvoice() {
  let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let Current = date+"/"+month+ "/"+year;
  return (
    <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <div className="createInvoice">
          <h2 className="createInvoiceClient">Invoice</h2>
          <div className='createInvoiceWidgetClient'>
          <form className="newInvoiceForm">
                        <div className="newInvoiceItem">
                        <label>Invoice No</label>
                        <input type="text" placeholder=""/>
                        </div>
                        <div className="newInvoiceItem">
                
                        </div>
                        <div className="newInvoiceItem">
                                <label>Date</label>
                                <input type="text" placeholder="Date" value={Current}/>
                        </div>
                        <div className="newInvoiceItem">
                                <label>Purchase Order No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Distributor No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Distributor Name</label>
                                <input type="text" placeholder="" disabled/>
                                <label className="namedefine">Contact No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newInvoiceItem">
                                <label>Direct Sponser No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Direct Sponser Name</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Sponser Upline No</label>
                                <input type="text" placeholder="" disabled/>
                                <label className="namedefine">Sponser Upline Name</label>
                                <input type="text" placeholder="" disabled/>
                        </div>
                        <div className="newInvoiceItem">
                                <label>Coupon Code</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Discount Type</label>
                                <input type="text" placeholder=""/>
                        </div>
            </form>
          </div>
          <div className='table' style={{ height: 500, width: '96%'}}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
        />
        </div>
          <div className="createInvoiceWidgetClient">
    <form className="newInvoiceForm">
    <div className="newInvoiceItem">
                                <label>Create By</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <button className="InvoiceCreateButton">Save</button>
                        <button className="InvoiceClearButton">Cancel</button>
                        </form>
      </div>
    </div>
    </div>
    </div>
  )
}
