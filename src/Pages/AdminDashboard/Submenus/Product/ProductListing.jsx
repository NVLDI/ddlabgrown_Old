import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./ProductListing.css"
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
            <Link to={"/productamend/"+params.row.id}>
            <button className='edit'>Edit</button>
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
    field: 'ProductCode',
    headerName: 'Product Code',
    width: 150,
    editable: false,
  },
  {
    field: 'ProductName',
    headerName: 'Product Name',
    width: 150,
    editable: false,
  },
  {
    field: 'Shape',
    headerName: 'Shape',
    editable: false,
    width: 130,
  },
  {
    field: 'Cutting',
    headerName: 'Cutting',
    editable: false,
    width: 140,
  },
  {
    field: 'Color',
    headerName: 'Color',
    editable: false,
    width: 130,
  },
];

const rows = [
  { id: '',Date: '',ProductCode:'', ProductName: '', Shape: '', Cutting: '' ,Color: ''},
];

export default function ProductListing(){
    return(
      <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="ProductListing">
         <h2 className="ProductListingClient">Product Listing</h2>
        <div style={{ height: 630, width: '100%',textAlign:'justify' }}>
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