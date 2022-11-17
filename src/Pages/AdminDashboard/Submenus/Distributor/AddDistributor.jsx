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
        <div>
         <div>
            <h1 className='RegClient'>
                Distributor Registration
            </h1>
        </div>
        <h3 className='RegClientNo'>Distributor No: D-00000001</h3>
        <form className='form-display'>
        <div className="column newDistributorItem-1">
        <h4 className='RegWidgetClient-sub'>Personal Details</h4>
        <div className='newDistributorItem-1'>
            <label>First Name</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>Last Name</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>NIC No</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>Address 1</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>Address 2</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>State</label>
            <select>
                <option value='1'>None</option>
            </select>                            
        </div>
        <div className='newDistributorItem-1'>
        <label>Country</label>
            <select>
                <option value='1'>None</option>
            </select>                             
        </div>
        <div className='newDistributorItem-1'>
            <label>Zip Code</label>
            <input type="text" placeholder=""/>                              
        </div>
        </div>
        <div className="column newDistributorItem-1">
        <h4 className='RegWidgetClient-sub'>Login & Verification Details</h4>
        <div className='newDistributorItem-1'>
            <label>User Name</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>Password</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>Confirm Password</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>Phone No</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>Phone Verification</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>E-Mail</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
            <label>E-Mail Verification</label>
            <input type="text" placeholder=""/>                                
        </div>
        <div className='newDistributorItem-1'>
        <label>Occupation</label>
            <select>
                <option value='1'>None</option>
            </select>                             
        </div>
        </div>
        <div className=' column newDistributorItem-1'>
            <h4 className='RegWidgetClient-sub'>Bank Details</h4>
            <div className='newDistributorItem-1'>
            <label>Bank Name</label>
            <input type="text" placeholder=""/>   
            </div>
            <div className='newDistributorItem-1'>
            <label>Account No</label>
            <input type="text" placeholder=""/>   
            </div>
            <div className='newDistributorItem-1'>
            <label>Shift Code</label>
            <input type="text" placeholder=""/>   
            </div>
            <div className='newDistributorItem-1'>
            <label>Bank Address #1</label>
            <input type="text" placeholder=""/>   
            </div>
            <div className='newDistributorItem-1'>
            <label>Bank Address #2</label>
            <input type="text" placeholder=""/>   
            </div>
            <div className='newDistributorItem-1'>
        <label>Country</label>
            <select>
                <option value='1'>None</option>
            </select>                             
            </div>
            </div>
            <div className=' column newDistributorItem-Referal'>
            <h4 className='RegWidgetClient-sub'>Referral Code</h4>
            <div className='newDistributorItem-1'>
            <label>Referral Code</label>
            <input type="text" placeholder=""/>   
            </div>
            <div className='newDistributorItem-1'>
            <label>Sponsor's Name</label>
            <input type="text" placeholder=""/>   
            </div>
            <div className='newDistributorItem-1'>
            <label>Contact No</label>
            <input type="text" placeholder=""/>   
            </div>
            <div className='newDistributorItem-1-button'>
        <button className='buttondisplay'>Save</button>
        <button className='buttondisplay'>Cancel</button>
        </div>
        </div> 
        </form>
    </div>
                </div>
                </div>
                </div>
    )
}