import React from 'react'
import "./Topbar.css";
import {NotificationsNone, Language,Settings} from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export default function Topbar() 
  {
    let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let Current = date+"/"+month+ "/"+year;
  return (
    <div className="topbar">
      <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DD Lab Grown Diamond</span>
        </div>
        <div className="topRight">
        <label className="time">{Current}</label>
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
          <Link to={"/adminprofile"} className='link'>
          <Tooltip title="Profile">
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          </Tooltip>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}