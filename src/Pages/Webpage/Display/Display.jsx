import React from 'react'
import "./Display.css"
import Topbar from "../Topbar/WepageTopbar";
import Content from '../Content/Content';
export default function Display() {
  return (
    <div>
        <Topbar/>
        <div className="container">
          <Content/>
        <div className="middle-1">
        <h1>DD Lab Grown Diamond COMING SOON</h1>
        <h4 className='hcolor-1'>Product Page is under construction </h4>
        <h6 className='hcolor-1'>We will be back soon</h6>
        </div>
        </div>
    </div>
  )
}
