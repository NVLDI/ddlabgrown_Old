import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./DistributorListing.css"

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'Date',
    headerName: 'Date of Registor',
    width: 180,
    editable: true,
  },
  {
    field: 'DistributorNo',
    headerName: 'D.No',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'NICNo',
    headerName: 'NIC No',
    editable: true,
    width: 160,
  },
  {
    field: 'phoneNo',
    headerName: 'Phone No',
    editable: true,
    width: 160,
  },
  {
    field: 'address',
    headerName: 'Address',
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
            <button>Edit</button>
            <DeleteOutlineIcon/>
            </>
        )
    }
  },
];

const rows = [
  { id: 1,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
  { id: 2,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
  { id: 3,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
  { id: 4,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
  { id: 5,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
  { id: 6,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
  { id: 7,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
  { id: 8,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
  { id: 9,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
  { id: 10,Date: '23rd sep 2022', DistributorNo: 'DO-194345', name: 'Venkatesan', NICNo: 'L4319135' ,phoneNo: 7010674161, address: 'No 5/29 new street Thathankuppam'},
];

export default function DistributorListing(){
    return(
        
    <div className="DistributorListing">
         <h3 className="DistributorListingWidgetClient">Distributor Listing</h3>
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
    )
}