import React from 'react'
import "./Home"
import Topbar from "../Topbar/WebpageTopbar"
import Content from "../Content/Content"
import { Link } from 'react-router-dom'

export default function Distributor() {
  return (
    <div>
         <Topbar/>
         <div className="Display">
           <Content/>
        </div>
        <Link to="/" className='link'>
      <div className="topbarIconsContainer">
            Shopping
          </div>
        </Link>
    </div>
  )
}
