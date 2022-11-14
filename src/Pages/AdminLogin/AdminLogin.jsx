import "./AdminLogin.css"
import {useNavigate} from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
    const navigateDistributor = () => {
        navigate('/home');
      };

  return (
    <div className="AdminLogin">
      <h2 className="LoginAdminClient">Admin Login</h2>
        <div className="AdminLoginWidgetClient">
            <form className="newAdminForm">
                <div className="newAdminItem">
                    <label>Admin</label>
                    <input type="text" placeholder="Admin" id="username_txt"/>
                </div>
                <div className="newAdminItem">
                    <label>Password</label>
                    <input type="password" placeholder="Password" id="password_txt"/>
                </div>

        <button className="button" onClick={navigateDistributor}>Submit</button>
        <button className="button">Cancel</button>
            </form>
        </div>
      </div>
  )
}
