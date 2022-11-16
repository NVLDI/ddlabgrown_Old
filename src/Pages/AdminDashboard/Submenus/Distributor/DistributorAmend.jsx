import React from 'react'
import "./DistributorAmend"
import {useNavigate} from "react-router-dom";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";

export default function DistributorAmend() {
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let Current = date+"/"+month+ "/"+year;
  const navigate = useNavigate();
  const navigateDistributor = () => {
  navigate('/Home');
  };
  return (
    <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <div className="Distributor">
                    <h2 className="DistributorClient">Distributor Amend</h2>
                    <div className="DistributorWidgetClient">
                    <form className="newDistributorForm">
                        <div className="newDistributorItem">
                                <label>Distributor No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                
                        </div>
                        <div className="newDistributorItem">
                                <label>Date</label>
                                <input type="text" placeholder="Date" value={Current}/>
                        </div>
                        </form>
                        </div>
                        
                        <h4 className="DeliveryWidgetClient-sub">Personal Details</h4>
                        <div className="DistributorWidgetClient">
                        <form className="newDeliveryForm-con">
                        <div className="newDistributorItem">
                                <label className="namedefine">First Name</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Last Name</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Occupation</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                </select>
                                
                                
                        </div>
                        <div className="newDistributorItem">
                        <label className="namedefine">NIC No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Address 1</label>
                                <input type="text" placeholder=" "/>
                                <label className="namedefine">Address 2</label>
                                <input type="text" placeholder=""/>
                                
                        </div>
                       
                        <div className="newDistributorItem">
                        <label className="namedefine">State</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                </select>
                                <label className="namedefine">Zip Code</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Country</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                </select>
                        </div>
                        </form>
                        </div>
                        <h4 className="DeliveryWidgetClient-sub">Login & Verification Details</h4>
                        <div className="DistributorWidgetClient">
                        <form className="newDeliveryForm-con">
                        <div className="newDistributorItem">
                        <label className="namedefine">Username</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                <label className="namedefine">Password</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                <label className="namedefine">Confirm Password</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        <label>Phone Number</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Phone Verification Code</label>
                                <input type="text" placeholder=""/>
                                
                        </div>
                        <div className="newDistributorItem">
                                <label>E-mail</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Email Verification Code</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                               
                        </div>
                        <div className="newDistributorItem">
                                <label>Account Number</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Confirm Account Number</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Shift Code</label>
                                <input type="text" placeholder=""/>
                        </div>
                        </form>
                    </div>
                    <h4 className="DeliveryWidgetClient-sub">Referral Code</h4>
                        <div className="DistributorWidgetClient">
                        <form className="newDeliveryForm-con">
                        <div className="newDistributorItem">
                                <label className="namedefine">Referral code</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                <label className="namedefine">Sponsor's Firstname</label>
                                <input type="text" placeholder="" disabled/>
                        </div>
                        <div className="newDistributorItem">
                                <label className="namedefine">Contact No</label>
                                <input type="text" placeholder="" disabled/>
                        </div>
                        <div className="newDistributorItem">
                              
                        </div>
                        <button className="distributorCreateButton" onClick={navigateDistributor}>Update</button>
                        <button className="distributorClearButton">Cancel</button>
                        </form>
                        </div>
                        
                        
                        
                        
                    
                </div>
                </div>
                </div>
  )
}
