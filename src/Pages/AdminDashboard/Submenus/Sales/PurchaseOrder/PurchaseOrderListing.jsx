import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./PurchaseOrderListing.css"
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
            <Link to={"/PurchaseOrderamend/"+params.row.id}>
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
    field: 'PurchaseOrderNo',
    headerName: 'PO.No',
    width: 150,
    editable: false,
  },
  {
    field: 'ProductCode',
    headerName: 'Product Code',
    width: 150,
    editable: false,
  },
  {
    field: 'ProductDes',
    headerName: 'Product Description',
    editable: false,
    width: 160,
  },
  {
    field: 'Createby',
    headerName: 'Created By',
    editable: false,
    width: 160,
  },
  {
    field: 'AmendBy',
    headerName: 'Amend By',
    editable: false,
    width: 160,
  },
  {
    field: 'AmendDate',
    headerName: 'Amend Date',
    editable: false,
    width: 160,
  }, 
];

const rows = [
  { id: '',Date: '', PurchaseOrderNo: '', ProductCode: '', ProductDes: '' ,Createby: '', AmendBy: '', AmendDate: ''},
  
];

export default function PurchaseOrderListing(){
    return(
      <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="PurchaseOrderListing">
         <h3 className="PurchaseOrderListingClient">Purchase Order Listing</h3>
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