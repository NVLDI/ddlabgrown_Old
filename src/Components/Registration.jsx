import React from 'react'
import "./Registration.css"

export default function Registration() {
  return (
    <div>
        <form>
        <div>
            <h1 className='RegClient'>
                Distributor Registration
            </h1>
        </div>
        <h3 className='RegClientNo'>Distributor No: D-00000001</h3>
        <div className="column newDistributorItem-1">
        <h4>Personal Details</h4>
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
        <div className='newDistributorItem-1'>
        <label>Occupation</label>
            <select>
                <option value='1'>None</option>
            </select>                             
        </div>
        <div className='newDistributorItem-1-button'>
        <button>Save</button>
        </div>
        </div>
        
        <div className="column newDistributorItem-1">
        <h4>Login & Verification Details</h4>
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
        </div>
        <div className=' column newDistributorItem-1'>
            <h4>Bank Details</h4>
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
            <h4>Referral Code</h4>
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
        </div> 
        </form>
    </div>
  )
}
