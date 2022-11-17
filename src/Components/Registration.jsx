import React from 'react'
import "./Registration.css"
import Publish from '@mui/icons-material/Publish';

export default function Registration() {
  return (
    <div>
         <div className='Product'>
            <h2 className='ProductClient'>
                Product
            </h2>
            <div>
            <form className='form-display'>
            <div className="column newDistributorItem-1">
            <div className="distributorUpload">
            <label>  Product Images</label>
            <img className="distributorImg" src="" alt="" />
            <label htmlFor="file"><Publish/></label>
            <input type="file" id="file" style={{display:"none"}}/>
            </div>
            </div>
            <div className='newDistributorItem-1'>
            <label>Product Code</label>
            <input type="text" placeholder=""/>                                
            </div>
            <div className='newDistributorItem-1'>
            <label>Product Name</label>
            <input type="text" placeholder=""/>                                
            </div>
            <div className='newDistributorItem-1'>
            <label>Diamond Shape</label>
            <select>
            <option value="1">None</option>
                    <option value="2">Round</option>
                    <option value="3">Cushion</option>
                    <option value="4">Princess</option>
                    <option value="5">Emerald</option>
                    <option value="6">Radiant</option>
                    <option value="7">Asscher</option>
                    <option value="8">Pear</option>
                    <option value="9">Marquise</option>
                    <option value="10">Heart</option>
            </select>                            
            </div>
            <div className='newDistributorItem-1'>
            <label>Shape Cutting</label>
            <select>
                    <option value="1">None</option>
                    <option value="2">Good</option>
                    <option value="3">Very Good</option>
                    <option value="4">Idea</option>
                    <option value="5">Prefect Idea</option>
            </select>                            
            </div>
            <div className='newDistributorItem-1'>
            <label>Diamond Color</label>
            <select>
            <option value="1">None</option>
                    <option value="2">D</option>
                    <option value="3">E</option>
                    <option value="4">F</option>
                    <option value="5">G</option>
                    <option value="6">H</option>
                    <option value="7">I</option>
                    <option value="8">J</option>
                    <option value="9">K</option>
            </select>                            
            </div>
            
            
            <div className='newDistributorItem-1'>
            <label>Diamond Carat</label>
            <select>
                <option value='1'></option>
            </select>                            
            </div>
            <div className='newDistributorItem-1'>
            <label>Diamond Clarity</label>
            <select>
            <option value="1">None</option>
                    <option value="2">I1</option>
                    <option value="3">SI2</option>
                    <option value="4">SI1</option>
                    <option value="5">VS2</option>
                    <option value="6">VS1</option>
                    <option value="7">VVS2</option>
                    <option value="8">VVS1</option>
                    <option value="9">I</option>
                    <option value="10">FI</option>
            </select>                            
            </div>
            <div className='newDistributorItem-1'>
            <label>Certificate No</label>
            <input type="text" placeholder=""/>                                
            </div>
            <div className='newDistributorItem-1'>
            <label>Currency</label>
            <select>
                <option value="1">None</option>
                    <option value="2">HKD</option>
                    <option value="3">RMB</option>
                    <option value="4">USD</option>
                    <option value="5">RM</option>
            </select>                            
            </div>
            <div className='newDistributorItem-1'>
            <label>MSRP</label>
            <input type="text" placeholder=""/>                                
            </div>
            <div className='newDistributorItem-1-button'>
            <button className='buttondisplay'>Save</button>
            <button className='buttondisplay'>Cancel</button>
            </div>
            
            </form>
            </div>
        </div>
    </div>
  )
}
