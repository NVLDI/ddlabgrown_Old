import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./PurchaseOrderListing.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'Date',
    headerName: 'Date',
    width: 140,
    editable: true,
  },
  {
    field: 'PurchaseOrderNo',
    headerName: 'PO.No',
    width: 150,
    editable: true,
  },
  {
    field: 'ProductCode',
    headerName: 'Product Code',
    width: 150,
    editable: true,
  },
  {
    field: 'ProductDes',
    headerName: 'Product Description',
    editable: true,
    width: 160,
  },
  {
    field: 'Createby',
    headerName: 'Created By',
    editable: true,
    width: 160,
  },
  {
    field: 'AmendBy',
    headerName: 'Amend By',
    editable: true,
    width: 160,
  },
  {
    field: 'AmendDate',
    headerName: 'Amend Date',
    editable: true,
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    editable: true,
    width: 160,
    renderCell:(params)=>{
        return(
            <>
            <VisibilityIcon/>
            <Link to={"/PurchaseOrderamend/"+params.row.id}>
            <button>Edit</button>
            </Link>
            <DeleteOutlineIcon/>
            </>
        )
    }
  },
];

const rows = [
  { id: 1,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 2,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 3,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 4,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 5,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 6,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 7,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 8,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 9,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 10,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 11,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 12,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 13,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 14,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 15,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 16,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 17,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 18,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 19,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
  { id: 20,Date: '23rd sep 2022', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161, AmendBy: 'No 5/29 new street Thathankuppam', AmendDate: '23 jan 2022'},
];

export default function PurchaseOrderListing(){
    return(
      <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="PurchaseOrderListing">
         <h3 className="PurchaseOrderListingWidgetClient">Purchase Order Listing</h3>
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