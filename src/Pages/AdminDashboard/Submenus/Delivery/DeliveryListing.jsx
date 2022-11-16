import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./DeliveryListing.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
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
            <Link to={"/DeliveryAmend/"+params.row.id}>
            <button className='edit'>Edit</button>
            </Link>
            <DeleteOutlineIcon lassName='deleteicon'/>
            </>
        )
    }
  },
  { field: 'id', headerName: 'id', width: 90 },
  {
    field: 'Date',
    headerName: 'Date',
    width: 140,
    editable: false,
  },
  {
    field: 'DeliveryNo',
    headerName: 'Delivery.No',
    width: 130,
    editable: false,
  },
  {
    field: 'INVNo',
    headerName: 'Invoice No',
    width: 140,
    editable: false,
  },
  {
    field: 'PONo',
    headerName: 'PO No',
    editable: false,
    width: 160,
  },
  {
    field: 'DeliveryMethod',
    headerName: 'Delivery Method',
    editable: false,
    width: 160,
  },
  {
    field: 'PaymentType',
    headerName: 'Payment Type',
    editable: false,
    width: 160,
  },
  
];

const rows = [
  { id: '',Date: '', DeliveryNo: '', INVNo: '', PONo: '' ,DeliveryMethod: '', PaymentType: ''},
];

export default function DeliveryListing(){
    return(
      <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="DeliveryListing">
         <h2 className="DeliveryOrderListingClient">Delivery Listing</h2>
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