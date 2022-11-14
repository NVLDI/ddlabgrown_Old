import React from 'react'
import "./Display.css"
import Topbar from "../Topbar/WepageTopbar";
import Content from "../Content/Content"

export default function Display() {
  return (
    <div>
        <Topbar/>
        <div className="Display">
           <Content/>
        </div>
    </div>
    
  )
}
