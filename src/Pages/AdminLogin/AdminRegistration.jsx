import React, {useState}  from 'react'
import { Container ,Paper, Button} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function AdminRegistration() {
    const paperStyle={padding:'15px 20px', width:600,margin:'15px auto'}
    const [name,setName]=useState('')
    const [password,setpassword]=useState('')
    const [conPassword,setConPassword]=useState('')
    const [userName,setUsername]=useState('')
    const [phoneNo,setPhone]=useState('')
    const [lastName,setlastname]=useState('')
    const handleClick=(e)=>{
        
      }
      const ResetField=(e)=>
      {
        setName(()=> "")
        setConPassword(()=> "")
        setPhone(()=> "")
        setpassword(()=> "")
        setUsername(()=> "")
      }
  return (
    <div><Container>
    <Paper elevation={3} style={paperStyle}>
        <h1>Adminstration Registration</h1>
<Box
component="form"
sx={{
  '& > :not(style)': { m: 1 },
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth
value={name}
onChange={(e)=>setName(e.target.value)}
/>
<TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
value={lastName}
onChange={(e)=>setlastname(e.target.value)}
/>
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
<TextField id="outlined-basic" label="Phone No" variant="outlined" fullWidth
value={phoneNo}
onChange={(e)=>setPhone(e.target.value)}
/>

  <FormControlLabel control={<Checkbox/>} label="Product"/>
  <FormControlLabel control={<Checkbox/>} label="Distributor"/>
  <FormControlLabel control={<Checkbox/>} label="Sales"/>
  <FormControlLabel control={<Checkbox/>} label="Marketing"/>
  <FormControlLabel control={<Checkbox/>} label="Payment"/>
  <FormControlLabel control={<Checkbox/>} label="Delivery"/>
  <FormControlLabel control={<Checkbox/>} label="After Sales Service"/>
  <FormControlLabel control={<Checkbox/>} label="All"/>
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
