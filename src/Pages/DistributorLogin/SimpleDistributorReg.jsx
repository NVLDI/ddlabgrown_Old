import React, {useState}  from 'react'
import { Container ,Paper, Button} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useNavigate} from "react-router-dom";

export default function SimpleDistributorReg() {
    const navigate = useNavigate();
    const paperStyle={padding:'15px 20px', width:600,margin:'15px auto'}
    const [password,setpassword]=useState('')
    const [conPassword,setConPassword]=useState('')
    const [userName,setUsername]=useState('')
    const [Email,setEmail]=useState('')
    const [verification, setverification]=useState('')
    const [sponsor,setsponsor]=useState('')
    const handleClick=(e)=>{
        navigate('/distributorHomepage');
      }
      const ResetField=(e)=>
      {
        setConPassword(()=> "")
        setEmail(()=> "")
        setpassword(()=> "")
        setUsername(()=> "")
        setverification(()=> "")
        setsponsor(()=>"")
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
value={userName}
onChange={(e)=>setUsername(e.target.value)}
/>
<TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth
value={password}
onChange={(e)=>setpassword(e.target.value)}
/>
<TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" fullWidth
value={conPassword}
onChange={(e)=>setConPassword(e.target.value)}
/>
<TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth
value={Email}
onChange={(e)=>setEmail(e.target.value)}
/>
<TextField id="outlined-basic" label="Verification Code" variant="outlined" fullWidth
value={verification}
onChange={(e)=>setverification(e.target.value)}
/>
<TextField id="outlined-basic" label="Sponsor Id" variant="outlined" fullWidth
value={sponsor}
onChange={(e)=>setsponsor(e.target.value)}
/>
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
