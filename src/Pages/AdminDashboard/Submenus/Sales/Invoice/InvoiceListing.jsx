import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./InvoiceListing.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import Sidebar from "../../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../../Components/Topbar/Topbar";
const columns = [
  {
    field: 'action',
    headerName: 'Action',
    editable: false,
    width: 160,
    renderCell:(params)=>{
        return(
            <>
            <VisibilityIcon className='icon'/>
            <Link to={"/invoiceAmend/"+params.row.id}>
            <button className='edit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='deleteicon'/>
            </>
        )
    }
  },
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'Date',
    headerName: 'Date',
    width: 140,
    editable: false,
  },
  {
    field: 'InvoiceNo',
    headerName: 'Invoice No',
    width: 150,
    editable: false,
  },
  {
    field: 'PurchaseOrderNo',
    headerName: 'PO.No',
    width: 150,
    editable: false,
  },
  {
    field: 'ProductCode',
    headerName: 'Product Code',
    editable: false,
    width: 180,
  },
  {
    field: 'ProductDes',
    headerName: 'Product Description',
    editable: false,
    width: 210,
  },
];

const rows = [
  
];

export default function InvoiceListing(){
    return(
      <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="InvoiceListing">
         <h2 className="InvoiceListingClient">Invoice Listing</h2>
        <div style={{ height: 630, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
    </div>
          </div>
          </div> 
    )
}