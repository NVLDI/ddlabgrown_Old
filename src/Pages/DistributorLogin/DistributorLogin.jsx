import {useNavigate} from "react-router-dom";
import React,{useState} from "react";
import { Container ,Paper, Button} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function DistributorLogin() {
  const paperStyle={padding:'35px 20px', width:600,margin:'20px auto'}
  const navigate = useNavigate();
  const [distributor_txt, setdistributor] = useState('');
  const [password_txt, setPassword] = useState('');
    const navigateDistributor = () => {
      if((distributor_txt === 'keensk')&&(password_txt === 'keensk123'))
      {
        navigate('/distributorHomepage');
      }
      else
      {
        alert("Incorrect Username and Password")
      }
};
const Reset = () => {
  setdistributor(()=> "")
  setPassword(()=> "")
};
const signup = ()=>{
  navigate('/simpleDistributorReg');
}
  return (
    <div>
    <Container>
  <Paper elevation={3} style={paperStyle}>
      <h2>Distributor Login</h2>
<Box
component="form"
sx={{
'& > :not(style)': { m: 1 },
}}
noValidate
autoComplete="off"
>

<TextField id="outlined-basic" label="Username" variant="outlined" fullWidth
value={distributor_txt}
onChange={(e)=>setdistributor(e.target.value)}
/>
<TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth
value={password_txt}
onChange={(e)=>setPassword(e.target.value)}
/>
<Button variant="contained" onClick={navigateDistributor}>
  Login
</Button>
<Button variant="contained" onClick={Reset}>
  Reset
</Button>
<Button variant="outlined" onClick={signup}>
  Sign Up
</Button>
</Box>
</Paper>
</Container>
</div>
  )
}
