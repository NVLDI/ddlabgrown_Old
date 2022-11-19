import "./Distributor.css"
import React, {useState}  from 'react'
import {useNavigate} from "react-router-dom";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
import { Container ,Paper, Button} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";

export default function Distributor(){
    const paperStyle={padding:'15px 20px', width:600,margin:'15px auto'}
        let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let Current = date+"/"+month+ "/"+year;
        const[inputs,setInputs]=useState({
            "first_name":"",
    "last_name":"",
    "nic_no":"",
    "address_1":"",
    "address_2":"",
    "state":"",
    "country":"",
    "zip_code":"",
    "username":"",
    "password":"",
    "phone_no":"",
    "email":"",
    "occupation":"",
    "bank_name":"",
    "account_no":"",
    "shift_code":"",
    "bank_address1":"",
    "bank_address2":"",
    "bank_country":"",
    "sponsor_id":"",
    "sponsor_name":"",
    "contact_no":""
        });
        const[error,setError]=useState(null);
        const handleChange = e=>{
            setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
          };
          const handleClick= async(e)=>{
            e.preventDefault()
            try {
              await axios.post("http://localhost:8800/api/distributor/disregister",inputs)
            } 
            catch (error){  
              setError(error.response.data);
            }
          }
          console.log(error)
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <div className="Distributor">
                    <h2 className="DistributorClient">Distributor Registration</h2>
                    <div><Container>
    <Paper elevation={3} style={paperStyle}>
<Box
component="form"
sx={{
  '& > :not(style)': { m: 1 },
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth
name="first_name"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
name="last_name"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Nic No" variant="outlined" fullWidth
name="nic_no"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Address #1" variant="outlined" fullWidth
name="address_1"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Address #2" variant="outlined" fullWidth
name="address_2"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="State" variant="outlined" fullWidth
name="state"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Country" variant="outlined" fullWidth
name="nic_no"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Zip Code" variant="outlined" fullWidth
name="zip_code"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="User Name" variant="outlined" fullWidth
name="username"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth
name="password"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" fullWidth
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Phone No" variant="outlined" fullWidth
name="phone_no"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Verification Code" variant="outlined" fullWidth
onChange={handleChange}
/>
<TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth
name="email"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Verification Code" variant="outlined" fullWidth
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Occupation" variant="outlined" fullWidth
name="occupation"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Bank Name" variant="outlined" fullWidth
name="bank_name"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Account No" variant="outlined" fullWidth
name="account_no"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Shift Code" variant="outlined" fullWidth
name="shift_code"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Bank Address #1" variant="outlined" fullWidth
name="bank_address1"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Bank Address #2" variant="outlined" fullWidth
name="bank_address2"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Bank Country" variant="outlined" fullWidth
name="bank_country"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Sponsor Id" variant="outlined" fullWidth
name="sponsor_id"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Sponsor Name" variant="outlined" fullWidth
name="sponsor_name"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Contact No" variant="outlined" fullWidth
name="contact_no"
onChange={handleChange}
/>

<br/><br/>
{error && error}
<br/>
<br/>
<br/>
<Button variant="contained" onClick={handleClick}>
    Submit
</Button>
<Button variant="contained">
    Reset
</Button>
</Box>
</Paper>
</Container></div>

        </div>      
        </div>
        </div>
    )
}