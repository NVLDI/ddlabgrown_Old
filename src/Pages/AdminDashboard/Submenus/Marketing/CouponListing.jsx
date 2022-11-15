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
    width: 120,
    renderCell:(params)=>{
        return(
            <>
            <VisibilityIcon/>
            <Link to={"/couponAmend/"+params.row.id}>
            <button>Edit</button>
            </Link>
            <DeleteOutlineIcon/>
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
  { id: '',DateCreate: '', Code: '', INVNo: '', DNo: '' ,DiscountType: '', CreateBy: ''},
  
];

export default function CouponListing(){
    return(
      <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="CouponListing">
         <h3 className="CouponListingWidgetClient">Coupon Listing</h3>
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