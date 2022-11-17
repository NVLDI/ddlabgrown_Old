import "./Product.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
import Publish from '@mui/icons-material/Publish';
import React,{useState} from "react";

export default function Product(){
    let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let FullDate = date+"/"+month+ "/"+year;
        const [ProductCode,setProductCode]=useState('');
        const [ProductName,setProductName]=useState('');
        const [DiamondShape,setDiamondShape]=useState('');
        const [ShapeCutting,setShapeCutting]=useState('');
        const [DiamondColor,setDiamondColor]=useState('');
        const [DiamondCarat,setDiamondCarat]=useState('');
        const [DiamondClarity,setDiamondClarity]=useState('');
        const [CertificateNo,setCertificateNo]=useState('');
        const [MSRP,setMSRP]=useState('');
        const [Currency,setCurrency]=useState('');
        
        const AddField=(e)=>{
            e.preventDefault()
            const AddProduct={FullDate,ProductCode,ProductName,DiamondShape,ShapeCutting,DiamondColor,DiamondCarat,DiamondClarity,CertificateNo,MSRP,Currency}
            console.log(AddProduct)
            fetch("http://localhost:8080/Product/AddProduct",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(AddProduct)
          }).then(()=>{
            console.log("New Client Added")
            setProductCode(()=> "")
            setProductName(()=> "")
            setDiamondShape(()=> "None")
            setShapeCutting(()=> "None")
            setDiamondColor(()=> "None")
            setDiamondCarat(()=> "None")
            setDiamondClarity(()=> "None")
            setCertificateNo(()=> "")
            setMSRP(()=> "")
            setCurrency(()=> "None")
          })
          }
        const ResetField = () => {
            setProductCode(()=> "")
            setProductName(()=> "")
            setDiamondShape(()=> "None")
            setShapeCutting(()=> "None")
            setDiamondColor(()=> "None")
            setDiamondCarat(()=> "None")
            setDiamondClarity(()=> "None")
            setCertificateNo(()=> "")
            setMSRP(()=> "")
            setCurrency(()=> "None")
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
                    <input type="text" placeholder=""
                    onChange={(e)=>setProductCode(e.target.value)}/>   
                    <label className="namedefine">Product Name</label>
                    <input type="text" placeholder=""
                    onChange={(e)=>setProductName(e.target.value)}/>
                    <label className="namedefine">Diamond Shape</label>
                    <select id="example" class="autocomplete" onChange={(e)=>setDiamondShape(e.target.value)}>
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
                    <label className="namedefine">Shape Cutting</label>
                    <select id="example" class="autocomplete" onChange={(e)=>setShapeCutting(e.target.value)}>
                    <option value="1">None</option>
                    <option value="2">Good</option>
                    <option value="3">Very Good</option>
                    <option value="4">Idea</option>
                    <option value="5">Prefect Idea</option>
                    </select>
                    <label className="namedefine">Diamond Color</label>
                    <select id="example" class="autocomplete" onChange={(e)=>setDiamondColor(e.target.value)}>
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
                    <div className="newproductItem">
                    <label>Diamond Carat</label>
                    <select id="example" class="autocomplete" onChange={(e)=>setDiamondCarat(e.target.value)}>
                    <option value="1">None</option>
                    </select>
                    <label className="namedefine">Diamond Clarity</label>
                    <select id="example" class="autocomplete" onChange={(e)=>setDiamondClarity(e.target.value)}>
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
                    <label className="namedefine">Certificate No</label>
                    <input type="text" placeholder="" onChange={(e)=>setCertificateNo(e.target.value)}/>   
                    <label className="namedefine">MSRP</label>
                    <input type="text" placeholder="" onChange={(e)=>setMSRP(e.target.value)}/>
                    <label className="namedefine">Currency</label>
                    <select id="example" class="autocomplete" onChange={(e)=>setCurrency(e.target.value)}>
                    <option value="1">None</option>
                    <option value="2">HKD</option>
                    <option value="3">RMB</option>
                    <option value="4">USD</option>
                    <option value="5">RM</option>
                    </select>
                    </div>
                    <div className='newProductItem-1-button'>
            <button className='buttondisplay' onClick={AddField}>Save</button>
            <button className='buttondisplay' onClick={ResetField}>Cancel</button>
            </div>
                    </form>
            </div>
            </div>
        </div>
        </div>
    )
}