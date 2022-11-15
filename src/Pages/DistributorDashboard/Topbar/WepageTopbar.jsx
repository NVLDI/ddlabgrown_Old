import "./WepageTopbar.css"
import {NotificationsNone, Language,Settings} from '@mui/icons-material/';
import { Link } from "react-router-dom";

export default function WepageTopbar() {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft"><sapn className="Frontlogo">DD Lab Grown Diamond</sapn></div>
      <div className="topRight">
      <div className="topbarIconsContainer">
                <NotificationsNone/>
                <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconsContainer">
                <Language/>
            </div>
            <div className="topbarIconsContainer">
                <Settings/>
            </div>
            <Link to="/distributorprofile" className='link'>
            <img src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1" alt="" className="topAvatar" />
            </Link>
      </div>
    </div>
  </div>
  )
}