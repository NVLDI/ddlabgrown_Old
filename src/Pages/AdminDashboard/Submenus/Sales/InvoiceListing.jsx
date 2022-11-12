import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./InvoiceListing.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'Date',
    headerName: 'Date',
    width: 140,
    editable: true,
  },
  {
    field: 'InvoiceNo',
    headerName: 'Invoice No',
    width: 150,
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
    editable: true,
    width: 180,
  },
  {
    field: 'ProductDes',
    headerName: 'Product Description',
    editable: true,
    width: 210,
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
            <Link to={"/invoiceAmend/"+params.row.id}>
            <button>Edit</button>
            </Link>
            <DeleteOutlineIcon/>
            </>
        )
    }
  },
];

const rows = [
  { id: 1,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 2,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 3,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 4,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 5,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 6,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 7,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 8,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 9,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 10,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 11,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 12,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 13,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 14,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 15,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 16,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 17,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 18,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 19,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
  { id: 20,Date: '23rd sep 2022',InvoiceNo:'2342342', PurchaseOrderNo: 'DO-194345', ProductCode: 'Venkatesan', ProductDes: 'L4319135' ,Createby: 7010674161},
];

export default function InvoiceListing(){
    return(
    <div className="InvoiceListing">
         <h3 className="InvoiceListingWidgetClient">Invoice Listing</h3>
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