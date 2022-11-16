import "./CreateCoupon.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

export default function CreateCoupon(){
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
            <div className="CreateCoupon">
                    <h2 className="CreateCouponClient">
                        Coupon
                    </h2>
                <div className="CreateCouponWidgetClient">
                <form className="CreateCouponForm">
                        <div className="CreateCouponItem">
                        
                        </div>
                        <div className="CreateCouponItem">
                        
                        </div>
                        <div className="CreateCouponItem">
                        <label>Date</label>
                        <input type="text" placeholder="Date" value={Current}/>
                        </div>
                        <div className="CreateCouponItem">
                                <label>Coupon Code</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Coupon Copy's</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="CreateCouponItem">
                        <label>Coupon Start Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" className="datepicker"/>
                        <label className="namedefine">Coupon Start End</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" className="datepicker"/>
                        </div>
                        <div className="CreateCouponItem">
                                <label>Discount Type</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">Cash</option>
                                <option value="3">3%</option>
                                <option value="4">5%</option>
                                <option value="5">10%</option>
                                <option value="6">15%</option>
                                <option value="7">20%</option>
                                </select>
                                <label className="namedefine">Cash Amount</label>
                                <input type="text" placeholder=""/>
                        </div>
                </form>
                </div>
                <div className="CreateCouponWidgetClient">
                    <form className="CreateCouponForm">
                    <div className="CreateCouponItem">
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