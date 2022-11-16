import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./DistributorListing.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom"
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
            <Link to={"/distributorAmend/"+params.row.id}>
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
    headerName: 'Date of Registor',
    width: 180,
    editable: false,
  },
  {
    field: 'DistributorNo',
    headerName: 'D.No',
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'NICNo',
    headerName: 'NIC No',
    editable: false,
    width: 160,
  },
  {
    field: 'phoneNo',
    headerName: 'Phone No',
    editable: false,
    width: 160,
  },
  {
    field: 'address',
    headerName: 'Address',
    editable: false,
    width: 160,
  },
  
];

const rows = [
  
];

export default function DistributorListing(){
    return(
      <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
    <div className="DistributorListing">
         <h2 className="DistributorClient">Distributor Listing</h2>
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
    </div>
    </div>
    </div>
    )
}