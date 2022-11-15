import "./AdminLogin.css"
import {useNavigate} from "react-router-dom";
import React,{useState} from "react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [admin_txt, setAdmin] = useState('');
  const handleAdmin = event=>
  {
    setAdmin(event.target.value);
    console.log('value is:', event.target.value);
  };
  const [password_txt, setPassword] = useState('');
  const handlePassword = event=>
  {
    setPassword(event.target.value);
    console.log('value is', event.target.value);
  };
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
const handleSubmit = event => {
  // 👇️ prevent page refresh
  event.preventDefault();

  console.log('form submitted ✅');
};
    const navigateClose = () => {
          navigate('/');
  };
  
  return (
    <div className="AdminLogin">
      <h2 className="LoginAdminClient">Admin Login</h2>
        <div className="AdminLoginWidgetClient">
            <form className="newAdminForm" onSubmit={handleSubmit}>
                <div className="newAdminItem">
                    <label>Admin</label>
                    <input type="text" placeholder="Admin" id="admin_txt" onChange={handleAdmin}/>
                </div>
                <div className="newAdminItem">
                    <label>Password</label>
                    <input type="password" placeholder="Password" id="password_txt" onChange={handlePassword}/>
                </div>

        <button type="submit" className="button" onClick={navigateDistributor}>Submit</button>
        <button className="button" onClick={navigateClose}>Cancel</button>
            </form>
        </div>
      </div>
  )
}
