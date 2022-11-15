import React from 'react'
import "./Topbar.css";
import {NotificationsNone, Language,Settings} from '@mui/icons-material/';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft"><sapn className="logo">DD Lab Grown Diamond</sapn></div>
        <div className="topRight">
            <div className="topbarIconsContainer">
                <NotificationsNone/>
                
            </div>
            <div className="topbarIconsContainer">
                <Language/>
            </div>
            <div className="topbarIconsContainer">
                <Settings/>
            </div>
            <Link to={"/adminprofile"} className='link'>
            <img src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1" alt="" className="topAvatar" />
        </Link>
        </div>
      </div>
    </div>
  )
}