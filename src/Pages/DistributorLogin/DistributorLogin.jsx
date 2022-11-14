import "./DistributorLogin.css"
import {useNavigate} from "react-router-dom";


export default function DistributorLogin() {
    const navigate = useNavigate();

    const navigateDistributor = () => {
        // 👇️ navigate to /contacts
        navigate('/');
      };

  return (
    <div className="DistributorLogin">
    <h2 className="LoginDistributorClient">Distributor Login</h2>
    <div className="DistributorLoginWidgetClient">
    <form className="newDistributor">
        <div className="newDistributorItem">
                <label>User Name</label>
                <input type="text" placeholder="Username"/>
        </div>
        <div className="newDistributorItem">
                <label>Password</label>
                <input type="password" placeholder="Password"/>
        </div>
        
        <button className="button" onClick={navigateDistributor}>Submit</button>
        <button className="button">Cancel</button>
    </form>
</div>
</div>
  )
}
