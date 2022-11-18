
import {useNavigate} from "react-router-dom";
import React,{useState} from "react";
import { Container ,Paper, Button} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AdminLogin() {
  const paperStyle={padding:'35px 20px', width:600,margin:'20px auto'}
  const navigate = useNavigate();
  const [admin_txt, setAdmin] = useState('');
  const [password_txt, setPassword] = useState('');
    const navigateDistributor = () => {
      if((admin_txt === 'admin')&&(password_txt === 'admin123'))
      {
        navigate('/home');
      }
      else
      {
        alert("Incorrect Admin and Password")
      }
};
const Reset = () => {
  setAdmin(()=> "")
  setPassword(()=> "")
};
  return (
    <div>
    <Container>
  <Paper elevation={3} style={paperStyle}>
      <h2>Admin Login</h2>
<Box
component="form"
sx={{
'& > :not(style)': { m: 1 },
}}
noValidate
autoComplete="off"
>

<TextField id="outlined-basic" label="Admin Name" variant="outlined" fullWidth
value={admin_txt}
onChange={(e)=>setAdmin(e.target.value)}
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
</Box>
</Paper>
</Container>
</div>
  )
}
