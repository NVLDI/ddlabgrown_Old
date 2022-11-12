import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./PaymentListing.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'id', width: 90 },
  {
    field: 'Date',
    headerName: 'Date',
    width: 140,
    editable: true,
  },
  {
    field: 'TranscationNo',
    headerName: 'Transcation.No',
    width: 130,
    editable: true,
  },
  {
    field: 'INVNo',
    headerName: 'Invoice No',
    width: 140,
    editable: true,
  },
  {
    field: 'PONo',
    headerName: 'PO No',
    editable: true,
    width: 160,
  },
  {
    field: 'PaymentMethod',
    headerName: 'Payment Method',
    editable: true,
    width: 160,
  },
  {
    field: 'PaymentType',
    headerName: 'Payment Type',
    editable: true,
    width: 160,
  },
  {
    field: 'CrytroCurrency',
    headerName: 'Crytro Currency',
    editable: true,
    width: 160,
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
            <Link to={"/paymentAmend/"+params.row.id}>
            <button>Edit</button>
            </Link>
            <DeleteOutlineIcon/>
            </>
        )
    }
  },
];

const rows = [
  { id: 1,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 2,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 3,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 4,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 5,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 6,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 7,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 8,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 9,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 10,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 11,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 12,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 13,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 14,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 15,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 16,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 17,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 18,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 19,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
  { id: 20,Date: '23rd sep 2022', TranscationNo: 'DO-194345', INVNo: 'Venkatesan', PONo: 'L4319135' ,PaymentMethod: 7010674161, PaymentType: 'No 5/29 new street Thathankuppam',CrytroCurrency: 'None'},
];

export default function PaymentListing(){
    return(
    <div className="PaymentListing">
         <h3 className="PaymentListingWidgetClient">Payment Listing</h3>
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