import "./Delivery.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Delivery(){
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
            <div className="Delivery">
                    <h2 className="DeliveryWidgetClient-title">Delivery Order</h2>
                    <div className="DeliveryWidgetClient">
                    <form className="newDeliveryForm">
                        <div className="newDeliveryItem">
                        
                        </div>
                        <div className="newDeliveryItem">
                               
                        </div>
                        <div className="newDeliveryItem">
                                <label>Date</label>
                                <input type="text" placeholder="Date" value={Current}/>
                        </div>
                    </form>
                    </div>
                    <div className="DeliveryWidgetClient">
                    <form className="newDeliveryForm">
                        <div className="newDeliveryItem">
                                <label>Delivery No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDeliveryItem">
                        <label>Invoice No</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                </select>
                        </div>
                        <div className="newDeliveryItem">
                        <label>ASM No</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                </select>
                        </div>
                        <div className="newDeliveryItem">
                        <label>Delivery Method</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">Self Pick-up</option>
                                <option value="3">Courier Service</option>
                                <option value="4">Security company</option>
                                </select>
                                
                        </div>
                        
                        <div className="newDeliveryItem">
                        <label>PO No</label>
                                <input type="text" disabled/>
                                
                        </div>
                        <div className="newDeliveryItem">
                                
                        </div>
                        <div className="newDeliveryItem">
                        <div className="newDeliveryItem">
                        <label>Self Pick-Up Date/Time</label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" className="datepicker"/>
                        </div> 
                        </div>
                    </form>
                    </div>
                    <h4 className="DeliveryWidgetClient-sub">Consignee/ Recipient</h4>
                    <div className="DeliveryWidgetClient">
                    <form className="newDeliveryForm-con">
                        <div className="newDeliveryItem">
                                <label>Consignee To</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">Distributor</option>
                                <option value="3">New Recipient</option>
                                </select>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Distributor No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Distributor Name</label>
                                <input type="text" placeholder="" disabled/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Address 1</label>
                                <input type="text" placeholder="" disabled/>
                                <input type="text" placeholder="" className="Address2" disabled/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Contact No</label>
                                <input type="text" placeholder="" disabled/>
                        </div>
                        </form>
                        </div>
                        <div className="DeliveryWidgetClient">
                        <form className="newDeliveryForm-con">
                        <div className="newDeliveryItem">
                                <label>New Recipient</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Contact No</label>
                                <input type="text" placeholder=""/>
                    </div>
                    </form>
                    </div>
                    <div className="DeliveryWidgetClient">
                        <form className="newDeliveryForm-con">
                    <div className="newDeliveryItem">
                                <label>Address 1</label>
                                <input type="text" placeholder=""/>
                                <input type="text" placeholder="" className="Address2"/>
                        </div>
                        </form>
                        </div>
                    <h4 className="DeliveryWidgetClient-sub">Courier Service</h4>
                    <div className="DeliveryWidgetClient">
                    <form className="newDeliveryForm-con">
                        <div className="newDeliveryItem">
                                <label>Courier Service Company</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">DHL Courier Service</option>
                                <option value="3">BlueDart</option>
                                </select>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Delivery Bill No(Airway Bill no)</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Contact No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Pick-Up Date</label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" className="datepicker"/>
                        </div>
                    </form>
                    </div>
                    <div className="DeliveryWidgetClient">
                    <form className="newDeliveryForm">
                    <div className="newDeliveryItem">
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