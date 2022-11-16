import React from 'react'
import Sidebar from "../../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../../Components/Topbar/Topbar";
import "./PurchaseOrder.css"
import { DataGrid } from '@material-ui/data-grid';


const columns = [
  { field: 'id', headerName: 'No', width: 100 },
  {
    field: 'ProductCode',
    headerName: 'Product Code',
    width: 180,
    editable: false,
  },
  {
    field: 'ProductDes',
    headerName: 'Product Description',
    width: 450,
    editable: false,
  },
  {
    field: 'Qty',
    headerName: 'Qty',
    width: 150,
    editable: false,
  },
  {
    field: 'Price',
    headerName: 'Price',
    editable: false,
    width: 160,
  },
  
];

const rows = [
  { id: '',ProductCode: '', ProductDes: '', Qty: '', Price: ''},
  
];
export default function PurchaseOrder() {
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
    <div className="purchaseOrder">
            <h2 className="PurchaseClient">Purchase Order</h2>
            <div className="purchaseWidgetClient">
            <form className="newPurchaseForm">
                        <div className="newPurchaseItem">
                                <label>Purchase Order No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Distributor No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Distributor Name</label>
                                <input type="text" placeholder="" disabled/>
                                <label className="namedefine">Contact No</label>
                                <input type="text" placeholder="" disabled/>
                        </div>
                        <div className="newPurchaseItem">

                        </div>
                        <div className="newPurchaseItem">
                                <label>Date</label>
                                <input type="text" placeholder="Date" value={Current}/>  
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
    <div className="purchaseWidgetClient">
    <form className="newPurchaseForm">
    <div className="newPurchaseItem">
                                <label className="namedefine">Create By</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <button className="PurchaseCreateButton">Procced</button>
                                <button className="PurchaseClearButton">Cancel</button>
                        </form>
      </div>
      
            </div>
    </div>
    </div>
  )
}
