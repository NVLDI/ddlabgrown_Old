import React from 'react'
import "./Topbar.css";
import {NotificationsNone, Language,Settings} from '@mui/icons-material/';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft"><sapn className="logo">DD Lab Grown Diamond</sapn></div>
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
            <img src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}