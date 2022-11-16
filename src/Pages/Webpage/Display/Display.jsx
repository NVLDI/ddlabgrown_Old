import React from 'react'
import "./Display.css"
import Topbar from "../Topbar/WepageTopbar";
import Content from '../Content/Content';
export default function Display() {
  return (
    <div>
        <Topbar/>
        <div className="container">
        <div className="middle-1">
        <img className='data' src="https://www.pngkit.com/png/full/989-9897010_free-png-transparent-diamond-crown-png-image-with.png" alt=""/>
        <h1>DD Lab Grown Diamond COMING SOON</h1>
        <h4 className='hcolor-1'>Product Page is under construction </h4>
        <h6 className='hcolor-1'>We will be back soon</h6>
        </div>
        </div>
    </div>
  )
}
