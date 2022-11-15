import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./AfterSalesServiceListing.css"
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
            <Link to={"/AfterSalesServiceAmend/"+params.row.id}>
            <button className="edit">Edit</button>
            </Link>
            <DeleteOutlineIcon className='deleteicon'/>
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
    field: 'ASMNo',
    headerName: 'ASM.No',
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
    field: 'DistributorNo',
    headerName: 'Distributor No',
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
  { id: '',Date: '', ASMNo: '', INVNo: '', DistributorNo: '' ,DeliveryMethod: '', PaymentType: ''}
];

export default function AfterSalesServiceListing(){
    return(
      <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="AfterSalesServiceListing">
         <h3 className="AfterSalesServiceListingWidgetClient">After Sales Service Listing</h3>
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