import "./DistributorLogin.css"
import {useNavigate} from "react-router-dom";
import React,{useState} from "react";

export default function DistributorLogin() {
    const navigate = useNavigate();
    const [distributor_txt, setAdmin] = useState('');
  const handledistributor = event=>
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
  const handleSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault();
  
    console.log('form submitted ✅');
  };
    const navigateDistributor = () => {
      if((distributor_txt === 'keensk')&&(password_txt === 'keensk123'))
      {
        navigate('/distributorHomepage');
      }
      else
      {
        alert("Incorrect Distributor and Password")
        
      }
      };
      const navigateClose = () => {
        navigate('/');
};
  return (
    <div className="DistributorLogin">
    <h2 className="LoginDistributorClient">Distributor Login</h2>
    <div className="DistributorLoginWidgetClient">
    <form className="newDistributor" onSubmit={handleSubmit}>
        <div className="newDistributorItem">
                <label>User Name</label>
                <input type="text" placeholder="Distributor Name" id="distributor_txt" onChange={handledistributor}/>
        </div>
        <div className="newDistributorItem">
                <label>Password</label>
                <input type="password" placeholder="Password" id="password_txt" onChange={handlePassword}/>
        </div>
        
        <button type="submit" className="button" onClick={navigateDistributor}>Login</button>
        <button className="button" onClick={navigateClose}>Cancel</button>
    </form>
</div>
</div>
  )
}
