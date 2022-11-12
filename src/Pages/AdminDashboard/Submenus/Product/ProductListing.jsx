import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./ProductListing.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom"
const columns = [
  { field: 'id', headerName: 'id', width: 90 },
  {
    field: 'Date',
    headerName: 'Date',
    width: 140,
    editable: true,
  },
  {
    field: 'ProductCode',
    headerName: 'Product Code',
    width: 150,
    editable: true,
  },
  {
    field: 'ProductName',
    headerName: 'Product Name',
    width: 150,
    editable: true,
  },
  {
    field: 'Shape',
    headerName: 'Shape',
    editable: true,
    width: 130,
  },
  {
    field: 'Cutting',
    headerName: 'Cutting',
    editable: true,
    width: 140,
  },
  {
    field: 'Color',
    headerName: 'Color',
    editable: true,
    width: 130,
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
            <Link to={"/productamend/"+params.row.id}>
            <button>Edit</button>
            </Link>
            <DeleteOutlineIcon/>
            </>
        )
    }
  },
];

const rows = [
  { id: 1,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 2,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 3,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 4,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 5,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 6,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 7,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 8,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 9,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 10,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 11,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 12,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 13,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 14,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 15,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 16,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 17,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 18,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 19,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
  { id: 20,Date: '23rd sep 2022',ProductCode:'2342342', ProductName: 'DO-194345', Shape: 'Venkatesan', Cutting: 'L4319135' ,Color: 7010674161},
];

export default function ProductListing(){
    return(
    <div className="ProductListing">
         <h3 className="ProductListingWidgetClient">Product Listing</h3>
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