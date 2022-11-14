import "./Distributor.css"
import {useNavigate} from "react-router-dom";

export default function Distributor(){
        const navigate = useNavigate();

    const navigateDistributor = () => {
       
        navigate('/Home');
      };
    return(
        <div className="Distributor">
                    <h2 className="DistributorClient">Distributor Registration</h2>
                    <div className="DistributorWidgetClient">
                    <form className="newDistributorForm">
                        <div className="newDistributorItem">
                                <label>Distributor No</label>
                                <input type="text" placeholder="Distributor No"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>User Name</label>
                                <input type="text" placeholder="User Name"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Distributor Name</label>
                                <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>NIC No</label>
                                <input type="text" placeholder="NIC No"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Phone Number</label>
                                <input type="text" placeholder="Phone Number"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Address 1</label>
                                <input type="text" placeholder="Address 1"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Address 2</label>
                                <input type="text" placeholder="Address 2"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>State</label>
                                <input type="text" placeholder="State"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Zip Code</label>
                                <input type="text" placeholder="Zip Code"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Country</label>
                                <input type="text" placeholder="Country"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>E-mail</label>
                                <input type="text" placeholder="E-mail"/>
                                
                        </div>
                        <div className="newDistributorItem">
                                <label>Occupation</label>
                                <input type="text" placeholder="Occupation"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Password</label>
                                <input type="text" placeholder="Password"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Confirm Password</label>
                                <input type="text" placeholder="Confirm Password"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Email Verification Code</label>
                                <input type="text" placeholder="Verification Code"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Phone Verification Code</label>
                                <input type="text" placeholder="Verification Code"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Sponsor No</label>
                                <input type="text" placeholder="Sponsor No"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Sponsor User Name</label>
                                <input type="text" placeholder="User Name"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Account Number</label>
                                <input type="text" placeholder="Account Number"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Confirm Account Number</label>
                                <input type="text" placeholder="Confirm Account Number"/>
                        </div>
                        <div className="newDistributorItem">
                                <label>Shift Code</label>
                                <input type="text" placeholder="Shift Code"/>
                        </div>
                        
                       
                        
                        <button className="distributorCreateButton" onClick={navigateDistributor}>Create</button>
                        <button className="distributorClearButton">Clear</button>
                        <button className="distributorCloseButton">Close</button>
                        
                        
                    </form>
                    </div>
                </div>
    )
}