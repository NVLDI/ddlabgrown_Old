import "./Product.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
import Publish from '@mui/icons-material/Publish';
import React,{useState} from "react";
import axios from "axios";

export default function Product(){
    let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let FullDate = date+"/"+month+ "/"+year;
        const[inputs,setInputs]=useState({
            "date:":FullDate,
            "product_code":"",
            "product_name":"",
            "diamond_shape":"",
            "shape_cutting":"",
            "diamond_color": "",
            "diamond_carat":"",
            "diamond_clarity":"",
            "certificate_no":"",
            "msrp":"",
            "currency":""
        });
        const[error,setError]=useState(null);
        const handleChange = e=>{
            setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
          };
        const AddField=async(e)=>{
            e.preventDefault()
            try {
                await axios.post("http://localhost:8800/api/product/addproduct",inputs)
              } 
              catch (error){  
                setError(error.response.data);
              }
          };
          console.log(error)
        const ResetField = () => {
            
        };
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
            <div className="product">
            <h2 className="productClient">Add Product</h2>
            <div className="productWidgetClient">
                    <form className="productForm">
                    <div className="newproductItem">
                    <div className="ProductUpload">
            <img className="ProductImg" src="" alt="" />
            <label htmlFor="file"><Publish/></label>
            <input className="namedefine" type="file" id="file" style={{display:"none"}}/>
            </div>
                    </div>
                    <div className="newproductItem">
                    <label>Product Code</label>
                    <input type="text" placeholder="" name="product_code" onChange={handleChange}/>   
                    <label className="namedefine">Product Name</label>
                    <input type="text" placeholder="" name="product_name" onChange={handleChange}/>
                    <label className="namedefine">Diamond Shape</label>
                    <select id="example" class="autocomplete" name="diamond_shape" onChange={handleChange}>
                    <option value="None">None</option>
                    <option value="Round">Round</option>
                    <option value="Cushion">Cushion</option>
                    <option value="Princess">Princess</option>
                    <option value="Emerald">Emerald</option>
                    <option value="Radiant">Radiant</option>
                    <option value="Asscher">Asscher</option>
                    <option value="Pear">Pear</option>
                    <option value="Marquise">Marquise</option>
                    <option value="Heart">Heart</option>
                    </select>
                    <label className="namedefine">Shape Cutting</label>
                    <select id="example" class="autocomplete" name="shape_cutting" onChange={handleChange}>
                    <option value="None">None</option>
                    <option value="Good">Good</option>
                    <option value="Very Good">Very Good</option>
                    <option value="Idea">Idea</option>
                    <option value="Prefect Idea">Prefect Idea</option>
                    </select>
                    <label className="namedefine">Diamond Color</label>
                    <select id="example" class="autocomplete" name="diamond_color" onChange={handleChange}>
                    <option value="None">None</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                    </select>
                    </div>
                    <div className="newproductItem">
                    <label>Diamond Carat</label>
                    <input type="text" placeholder="" name="diamond_carat" onChange={handleChange}/>
                    <label className="namedefine">Diamond Clarity</label>
                    <select id="example" class="autocomplete" name="diamond_clarity" onChange={handleChange}>
                    <option value="None">None</option>
                    <option value="I1">I1</option>
                    <option value="SI2">SI2</option>
                    <option value="SI1">SI1</option>
                    <option value="VS2">VS2</option>
                    <option value="VS1">VS1</option>
                    <option value="VVS2">VVS2</option>
                    <option value="VVS1">VVS1</option>
                    <option value="I">I</option>
                    <option value="FI">FI</option>
                    </select>
                    <label className="namedefine">Certificate No</label>
                    <input type="text" placeholder="" name="certificate_no" onChange={handleChange}/>   
                    <label className="namedefine">MSRP</label>
                    <input type="text" placeholder="" name="msrp" onChange={handleChange}/>
                    <label className="namedefine">Currency</label>
                    <select id="example" class="autocomplete" name="currency" onChange={handleChange}>
                    <option value="None">None</option>
                    <option value="HKD">HKD</option>
                    <option value="RMB">RMB</option>
                    <option value="USD">USD</option>
                    <option value="RM">RM</option>
                    </select>
                    </div>
                    <div className='newProductItem-1-button'>
            
            <button className='CreateButton' onClick={AddField}>Save</button>
            <button className='ClearButton' onClick={ResetField}>Cancel</button>
            </div>
            </form>
            {error && error}
            </div>
            </div>
        </div>
        </div>
    )
}