import React, {useState}  from 'react'
import { Container ,Paper, Button} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";

export default function SimpleDistributorReg() {
    const paperStyle={padding:'15px 20px', width:600,margin:'15px auto'}
    const[inputs,setInputs]=useState({
      "username":"",
      "password":"",
      "email":"",
      "sponsor_id":""
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
      const ResetField=(e)=>
      {
        
      }
  return (
    <div><Container>
    <Paper elevation={3} style={paperStyle}>
        <h1>Distributor Registration</h1>
<Box
component="form"
sx={{
  '& > :not(style)': { m: 1 },
}}
noValidate
autoComplete="off"
>
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
<TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth
name="email"
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Verification Code" variant="outlined" fullWidth
onChange={handleChange}
/>
<TextField id="outlined-basic" label="Sponsor Id" variant="outlined" fullWidth
name="sponsor_id"
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
<Button variant="contained" onClick={ResetField}>
    Reset
</Button>
</Box>
</Paper>
</Container></div>

  )
}
