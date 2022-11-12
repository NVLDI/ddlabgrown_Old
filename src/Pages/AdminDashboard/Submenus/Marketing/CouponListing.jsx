import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./CouponListing.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom"

const columns = [
  { field: 'id', headerName: 'id', width: 90 },
  {
    field: 'Code',
    headerName: 'Code',
    width: 130,
    editable: true,
  },
  {
    field: 'DateCreate',
    headerName: 'Date Create',
    width: 140,
    editable: true,
  },
  {
    field: 'INVNo',
    headerName: 'Invoice No',
    width: 140,
    editable: true,
  },
  {
    field: 'DNo',
    headerName: 'D.No',
    editable: true,
    width: 150,
  },
  {
    field: 'DiscountType',
    headerName: 'Discount Type',
    editable: true,
    width: 160,
  },
  {
    field: 'CreateBy',
    headerName: 'Create By',
    editable: true,
    width: 140,
  },
  {
    field: 'action',
    headerName: 'Action',
    editable: true,
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
];

const rows = [
  { id: 1,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 2,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 3,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 4,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 5,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 6,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 7,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 8,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 9,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 10,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 11,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 12,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 13,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 14,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 15,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 16,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 17,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 18,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 19,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
  { id: 20,DateCreate: '23rd sep 2022', Code: 'DO-194345', INVNo: 'Venkatesan', DNo: 'L4319135' ,DiscountType: 7010674161, CreateBy: 'No 5/29 new street Thathankuppam'},
];

export default function CouponListing(){
    return(
    <div className="CouponListing">
         <h3 className="CouponListingWidgetClient">Coupon Listing</h3>
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
    </div>
           
    )
}