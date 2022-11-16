import React from 'react'
import { Link } from 'react-router-dom';
import "./404Page.css";

export default function Page() {
  return (
    <div>
        <div class="topleft">
    <Link className='link' to={"/"}>
    <h3>Back</h3>
    </Link>
    </div>
    <div class="middle">
    <img className='data' src="https://www.freepnglogos.com/uploads/diamond-png/diamond-gemstone-black-icon-transparent-png-svg-vector-37.png" alt=""/>
    <h1>DD Lab Grown Diamond COMING SOON</h1>
    <h4 className='hcolor'>Product Page is under construction </h4>
    <h6 className='hcolor'>We will be back soon</h6>
    </div>
    </div>
  )
}
