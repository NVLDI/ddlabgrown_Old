import "./WebpageTopbar.css"
import { Link } from 'react-router-dom'
import {NotificationsNone, Language,Settings} from '@mui/icons-material/';
import Tooltip from '@mui/material/Tooltip';

export default function WebpageTopbar() {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="logo"><span className="Frontlogo">DD Lab Grown Diamond</span>
      </div>
      <div className="topRight">
      <Tooltip title="Notification">
          <div className="topbarIconContainer">
            <NotificationsNone />
            </div>
        </Tooltip>
          <Tooltip title="Language">
          <div className="topbarIconContainer">
            <Language />
            </div>
        </Tooltip>
          <Tooltip title="Setting">
          <div className="topbarIconContainer">
            <Settings />
          </div>
          </Tooltip>
          <Link to={"/distributorprofile"} className='link'>
          <Tooltip title="Profile Info">
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          </Tooltip>
          </Link>
      </div>
    </div>
  </div>
  )
}