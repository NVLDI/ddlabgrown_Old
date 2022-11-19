import React from 'react'
import { Link } from 'react-router-dom'
import "./Content.css"
export default function Content() {
  return (
    <div>
        <div className="container">
        <Link to="/shopping" className='link ham'>
          <h3>Shopping</h3>
        </Link>
        <div className="middle-1">
        <img className='data' src="https://www.pngkit.com/png/full/989-9897010_free-png-transparent-diamond-crown-png-image-with.png" alt=""/>
        <h1>DD Lab Grown Diamond COMING SOON</h1>
        <h4 className='hcolor-1'>Distributor Page is under construction </h4>
        <h6 className='hcolor-1'>We will be back soon</h6>
        </div>
        </div>
    </div>
  )
}
