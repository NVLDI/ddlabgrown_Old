import "./WepageTopbar.css"
import {NotificationsNone, Language,Settings} from '@mui/icons-material/';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

export default function WepageTopbar() {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft"><sapn className="Frontlogo">DD Lab Grown Diamond</sapn></div>
      <div className="topRight">
      <Tooltip title="Notification">
      <div className="topbarIconsContainer">
                <NotificationsNone/>
            </div>
            </Tooltip>
            <Tooltip title="Language">
            <div className="topbarIconsContainer">
                <Language/>
            </div>
            </Tooltip>
            <Tooltip title="Setting">
            <div className="topbarIconsContainer">
                <Settings/>
            </div>
            </Tooltip>
            <Link to="/distributorprofile" className='link'>
            <Tooltip title="Profile">
            <img src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1" alt="" className="topAvatar" />
            </Tooltip>
            </Link>
      </div>
    </div>
  </div>
  )
}
