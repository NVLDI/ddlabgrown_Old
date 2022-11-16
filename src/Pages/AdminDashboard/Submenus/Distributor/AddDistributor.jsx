import "./Distributor.css"
import {useNavigate} from "react-router-dom";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";

export default function Distributor(){
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
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <div className="Distributor">
                    <h2 className="DistributorClient">Distributor Registration</h2>
                    <div className="DistributorWidgetClient">
                    <form className="newDistributorForm">
                        <div className="newDistributorItem">
                                
                        </div>
                        <div className="newDistributorItem">
                
                        </div>
                        <div className="newDistributorItem">
                                <label>Date</label>
                                <input type="text" placeholder="Date" value={Current}/>
                        </div>
                        </form>
                        </div>
                    <div className="DistributorWidgetClient">
                    <form className="newDistributorForm">
                        <div className="newDistributorItem">
                                <label className="namedefine-up">Distributor No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                
                        </div>
                        <div className="newDistributorItem">
                              
                        </div>
                        </form>
                        </div>
                        <h4 className="DeliveryWidgetClient-sub">Personal Details</h4>
                        <div className="DistributorWidgetClient">
                        <form className="newDeliveryForm-con">
                        <div className="newDistributorItem">
                                <label>First Name</label>
                                <input type="text" placeholder=""/>                                
                        </div>
                        <div className="newDistributorItem">
                                
                                
                                
                        </div>
                        <div className="newDistributorItem">
                                
                                
                                
                        </div>
                        <div className="newDistributorItem">
                        <label>Last Name</label>
                                <input type="text" placeholder=""/>
                                
                        </div>
                        <div className="newDistributorItem">
                        <label>NIC No</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        
                        </div>
                        <div className="newDistributorItem">
                        <label>Address 1</label>
                                <input type="text" placeholder=" "/>  
                        </div>
                        <div className="newDistributorItem">       
                        </div>
                        <div className="newDistributorItem">
                                </div>
                                <div className="newDistributorItem">
                                <label>Address 2</label>
                                <input type="text" placeholder=""/>
                                </div>
                                <div className="newDistributorItem">
                                <label>State</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                </select>
                        </div>
                        <div className="newDistributorItem">
                        
                        </div>
                        <div className="newDistributorItem">
                        <label>Country</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                </select>
                        </div>
                        <div className="newDistributorItem">
                        <label>Zip Code</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        <label>Occupation</label>
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
                        <label>Username</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                
                        </div>
                        <div className="newDistributorItem">
                                
                        </div>
                        <div className="newDistributorItem">
                                <label>Password</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Confirm Password</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        
                                
                        </div>
                        <div className="newDistributorItem">
                        <label>Phone Number</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        <label>Phone Verification Code</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        
                                
                        </div>
                        <div className="newDistributorItem">
                        <label>E-mail</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        <label >Email Verification Code</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                
                                
                        </div>
                        <div className="newDistributorItem">
                        <label>Bank Name</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Account Number</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Shift Code</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        <label>Bank Address 1</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        <label>Bank Address 2</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                        <label>Country</label>
                                <input type="text" placeholder=""/>
                        </div>
                        </form>
                    </div>
                    <h4 className="DeliveryWidgetClient-sub">Referral Code</h4>
                        <div className="DistributorWidgetClient">
                        <form className="newDeliveryForm-con">
                        <div className="newDistributorItem">
                                <label>Referral code</label>
                                <input type="text" placeholder=""/>
                        </div>
                        <div className="newDistributorItem">
                                
                        </div>
                        <div className="newDistributorItem">
                                
                        </div>
                        <div className="newDistributorItem">
                                <label >Sponsor's Name</label>
                                <input type="text" placeholder="" disabled/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Contact No</label>
                                <input type="text" placeholder="" disabled/>
                        </div>
                        <div className="newDistributorItem">
                              
                        </div>
                        <div className="newDistributorItem">
                              
                        </div>
                        
                        </form>
                        </div>
                        
                        
                        
                        
                    
                </div>
                </div>
                </div>
    )
}