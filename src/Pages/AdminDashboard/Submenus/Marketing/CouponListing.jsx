import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./CouponListing.css"
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
            <Link to={"/couponAmend/"+params.row.id}>
            <button className='edit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='deleteicon'/>
            </>
        )
    }
  },
  { field: 'id', headerName: 'id', width: 90 },
  {
    field: 'Code',
    headerName: 'Code',
    width: 130,
    editable: false,
  },
  {
    field: 'DateCreate',
    headerName: 'Date Create',
    width: 140,
    editable: false,
  },
  {
    field: 'INVNo',
    headerName: 'Invoice No',
    width: 140,
    editable: false,
  },
  {
    field: 'DNo',
    headerName: 'D.No',
    editable: false,
    width: 150,
  },
  {
    field: 'DiscountType',
    headerName: 'Discount Type',
    editable: false,
    width: 160,
  },
  {
    field: 'CreateBy',
    headerName: 'Create By',
    editable: false,
    width: 140,
  },

];

const rows = [
  
];

export default function CouponListing(){
    return(
      <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="CouponListing">
         <h2 className="CouponOrderListingClient">Coupon Listing</h2>
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