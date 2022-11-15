import React from 'react'
import "./Home"
import Topbar from "../Topbar/WepageTopbar"
import Content from "../Content/Content"

export default function Distributor() {
  return (
    <div>
         <Topbar/>
         <div className="Display">
           <Content/>
        </div>
    </div>
  )
}
