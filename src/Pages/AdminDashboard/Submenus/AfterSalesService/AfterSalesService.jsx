import "./AfterSalesService.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AfterSalesService(){
    const [startDate, setStartDate] = useState(new Date());
        let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let Current = date+"/"+month+ "/"+year;
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
            <div className="AfterSalesService">
            <h2 className="AfterSalesServiceWidgetClient">After Sales Maintenance</h2>
            <div className="AfterSalesServiceClient">
            <form className="newAfterSalesServiceForm">
            <div className="newAfterSalesServiceItem">
                                <label>Atfer Sales Maintenance No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newAfterSalesServiceItem">
                                
                        </div>
                        <div className="newAfterSalesServiceItem">
                                <label>Date</label>
                                <input type="text" placeholder="Date" value={Current}/>
                        </div>
            </form>
            </div>
            <h4 className="AfterSalesServiceClient-sub">Distributor Info</h4>
            <div className="AfterSalesServiceClient">
                    <form className="newAfterSalesServiceForm-con">
                    <div className="newAfterSalesServiceItem">
                                <label>Distributor No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Distributor Name</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Purchase Invoice No</label>
                                <input type="text" placeholder=""/>

                        </div>
                        <div className="newAfterSalesServiceItem">
                        <label>Contact No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Certificate No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newAfterSalesServiceItem">
                                
                        </div>
                    </form>
            </div>
            <h4 className="AfterSalesServiceClient-sub">Product Details</h4>
            <div className="AfterSalesServiceClient">
                    <form className="newAfterSalesServiceForm-con">
                    <div className="newAfterSalesServiceItem">
                                <label>Product Code</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Product Name</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Service Request</label>
                                <select id="example" class="autocomplete">
                                <option value="1">Select Type of Service</option>
                                <option value="2">Cleaning</option>
                                </select>

                        </div>
                        <div className="newAfterSalesServiceItem">
                        <label>Service Remark</label>
                        <textarea className="multiline-text"/>
                        </div>
                        <div className="newAfterSalesServiceItem">
                        <label>Purchase Date</label>
                        <input type="text" placeholder=""/>
                        <label className="namedefine1">Estimate Ready Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" className="datepicker"/>
                        </div>
                    </form>
            </div>
            <h4 className="AfterSalesServiceClient-sub">Courier Service</h4>
                    <div className="AfterSalesServiceClient">
                    <form className="newAfterSalesServiceForm-con">
                        <div className="newAfterSalesServiceItem">
                                <label>Delivery Method</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">Self Pick-Up</option>
                                <option value="3">Courier Service</option>
                                <option value="4">Security Company</option>
                                </select>
                        </div>
                        <div className="newAfterSalesServiceItem">
                                <label>Courier Service Company</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">DHL Courier Service</option>
                                <option value="3">BlueDart</option>
                                </select>
                        </div>
                        <div className="newAfterSalesServiceItem">
                                <label>Contact No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newAfterSalesServiceItem">
                                <label>Self Pick-Up Date</label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" className="datepicker"/>
                        </div>
                    </form>
                    </div>
                    <div className="AfterSalesServiceClient">
                    <form className="newAfterSalesServiceForm">
                    <div className="newAfterSalesServiceItem">
                                <label>Create By</label>
                                <input type="text" placeholder="" disabled/>
                    </div>
                        </form>
                        </div>
            </div>
        </div>
        </div>
    )
}